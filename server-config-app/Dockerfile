###########################################################
# Container to build the SvelteKit application
###########################################################

# Single-stage build to output files to a volume
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the SvelteKit application
RUN npm run build && \
    mkdir -p /app/dist && \
    cp -r /app/.svelte-kit/output/* /app/dist/

# The /app/dist directory will contain the built SvelteKit application
# You can mount this directory when running the container with:
# docker run -v /path/on/host:/app/dist server-config-app-builder