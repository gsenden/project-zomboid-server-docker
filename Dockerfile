###########################################################
# Dockerfile that builds a Project Zomboid Gameserver
###########################################################
# Use multi-stage build to build the config app
FROM node:20-alpine AS config-app-builder

# Set the working directory for the config app
WORKDIR /app

# Copy server-config-app files
COPY server-config-app/package*.json ./
RUN npm install

# Copy the rest of the application code
COPY server-config-app/ .

# Build the SvelteKit application
RUN npm run build

FROM cm2network/steamcmd:root
RUN apt-get update \
  && apt-get install curl gnupg -y \
  && curl -sL https://deb.nodesource.com/setup_22.x | bash - \
  && apt-get install nodejs -y

LABEL maintainer="daniel.carrasco@electrosoftcloud.com"

ENV STEAMAPPID=380870
ENV STEAMAPP=pz
ENV STEAMAPPDIR="${HOMEDIR}/${STEAMAPP}-dedicated"
# Fix for a new installation problem in the Steamcmd client
ENV HOME="${HOMEDIR}"

# Install required packages
RUN apt-get update \
  && apt-get install -y --no-install-recommends --no-install-suggests \
  dos2unix \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Generate locales to allow other languages in the PZ Server
RUN sed -i 's/^# *\(es_ES.UTF-8\)/\1/' /etc/locale.gen \
  # Generate locale
  && locale-gen

# Download the Project Zomboid dedicated server app using the steamcmd app
# Set the entry point file permissions
RUN set -x \
  && mkdir -p "${STEAMAPPDIR}" \
  && chown -R "${USER}:${USER}" "${STEAMAPPDIR}" \
  && bash "${STEAMCMDDIR}/steamcmd.sh" +force_install_dir "${STEAMAPPDIR}" \
  +login anonymous \
  +app_update "${STEAMAPPID}" validate \
  +quit

# Copy the entry point file
COPY --chown=${USER}:${USER} scripts/entry.sh /server/scripts/entry.sh
RUN chmod 550 /server/scripts/entry.sh

# Copy searchfolder file
COPY --chown=${USER}:${USER} scripts/search_folder.sh /server/scripts/search_folder.sh
RUN chmod 550 /server/scripts/search_folder.sh

# Create required folders to keep their permissions on mount
RUN mkdir -p "${HOMEDIR}/Zomboid"

WORKDIR ${HOMEDIR}
# Expose ports
EXPOSE 16261-16262/udp \
  27015/tcp

ENTRYPOINT ["/server/scripts/entry.sh"]

# Copy the built config app from the builder stage and run it
COPY --from=config-app-builder /app/build /server-config-app
CMD [ "node", "/server-config-app/index.js" ]