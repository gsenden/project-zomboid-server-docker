<script lang="ts">
	import Setting from './Setting.svelte';

	interface Props {
		maxPlayers: number;
		open: boolean;
		autoWhiteList: boolean;
		RIP: boolean;
		displayName: boolean;
		displayFullName: boolean;
		spawnItems: string;
		pingLimit: number;
		serverPlayerID: string;
		sleepAllowed: boolean;
		sleepNeeded: boolean;
		playerRespawnWithSelf: boolean;
		playerRespawnWithOther: boolean;
		removePlayerCorpsesOnCorpseRemoval: boolean;
		trashDeleteAll: boolean;
		pvpMeleeWhileHitReaction: boolean;
		mouseOverToSeeDisplayName: boolean;
		hidePlayersBehindYou: boolean;
		playerBumpPlayer: boolean;
		mapRemotePlayerVisibility: number;
		allowCoop: boolean;
	}

	let {
		maxPlayers,
		open,
		autoWhiteList,
		RIP,
		displayName,
		displayFullName,
		spawnItems,
		pingLimit,
		serverPlayerID,
		sleepAllowed,
		sleepNeeded,
		playerRespawnWithSelf,
		playerRespawnWithOther,
		removePlayerCorpsesOnCorpseRemoval,
		trashDeleteAll,
		pvpMeleeWhileHitReaction,
		mouseOverToSeeDisplayName,
		hidePlayersBehindYou,
		playerBumpPlayer,
		mapRemotePlayerVisibility,
		allowCoop
	}: Props = $props();
</script>

<div class="space-y-2">
	<Setting 
		type="number" 
		testId="MaxPlayers" 
		label="Max Players" 
		alt="The default maximum number of players is 32." 
		value={maxPlayers} 
	/>

	<Setting 
		type="checkbox" 
		testId="Open" 
		label="Open" 
		alt="Open sesame" 
		value={open} 
	/>

	<Setting 
		type="checkbox" 
		testId="AutoCreateUserInWhiteList" 
		label="Auto Create User In White List" 
		alt="Automatically adds the user to the white list" 
		value={autoWhiteList} 
	/>

	<Setting 
		type="checkbox" 
		testId="DropsOffWhiteListAfterDeath" 
		label="Drops Off White List After Death" 
		alt="Goodbye after death" 
		value={RIP} 
	/>

	<Setting 
		type="checkbox" 
		testId="DisplayUsername" 
		label="Display Username" 
		alt="Who's that??" 
		value={displayName} 
	/>

	<Setting 
		type="checkbox" 
		testId="ShowFirstAndLastName" 
		label="Show First And Last Name" 
		alt="Who's thee?" 
		value={displayFullName} 
	/>

	<Setting 
		type="string" 
		testId="SpawnItems" 
		label="Spawn Items" 
		alt="You'll need admin permissions on the server. Then you can either use the debug menu (if enabled) or admin console commands to drop in items." 
		value={spawnItems} 
	/>

	<Setting 
		type="number" 
		testId="PingLimit" 
		label="Ping Limit" 
		alt="Maximum allowed ping" 
		value={pingLimit} 
	/>

	<Setting 
		type="string" 
		testId="ServerPlayerID" 
		label="Server Player ID" 
		alt="Steam ID or similar" 
		value={serverPlayerID} 
	/>

	<Setting 
		type="checkbox" 
		testId="SleepAllowed" 
		label="Sleep Allowed" 
		alt="Allow sleep?" 
		value={sleepAllowed} 
	/>

	<Setting 
		type="checkbox" 
		testId="SleepNeeded" 
		label="Sleep Needed" 
		alt="Is sleep needed?" 
		value={sleepNeeded} 
	/>

	<Setting 
		type="checkbox" 
		testId="PlayerRespawnWithSelf" 
		label="Player Respawn With Self" 
		alt="Respawn with self" 
		value={playerRespawnWithSelf} 
	/>

	<Setting 
		type="checkbox" 
		testId="PlayerRespawnWithOther" 
		label="Player Respawn With Other" 
		alt="Respawn with other" 
		value={playerRespawnWithOther} 
	/>

	<Setting 
		type="checkbox" 
		testId="RemovePlayerCorpsesOnCorpseRemoval" 
		label="Remove Player Corpses On Corpse Removal" 
		alt="Remove corpses when removed" 
		value={removePlayerCorpsesOnCorpseRemoval} 
	/>

	<Setting 
		type="checkbox" 
		testId="TrashDeleteAll" 
		label="Trash Delete All" 
		alt="Trash deletes all" 
		value={trashDeleteAll} 
	/>

	<Setting 
		type="checkbox" 
		testId="PVPMeleeWhileHitReaction" 
		label="PVP Melee While Hit Reaction" 
		alt="PVP melee hit reaction" 
		value={pvpMeleeWhileHitReaction} 
	/>

	<Setting 
		type="checkbox" 
		testId="MouseOverToSeeDisplayName" 
		label="Mouse Over To See Display Name" 
		alt="Show name on mouse over" 
		value={mouseOverToSeeDisplayName} 
	/>

	<Setting 
		type="checkbox" 
		testId="HidePlayersBehindYou" 
		label="Hide Players Behind You" 
		alt="Hide players behind you" 
		value={hidePlayersBehindYou} 
	/>

	<Setting 
		type="checkbox" 
		testId="PlayerBumpPlayer" 
		label="Player Bump Player" 
		alt="Players bump into each other" 
		value={playerBumpPlayer} 
	/>

	<Setting 
		type="number" 
		testId="MapRemotePlayerVisibility" 
		label="Map Remote Player Visibility" 
		alt="Show remote players on map" 
		value={mapRemotePlayerVisibility} 
	/>

	<Setting 
		type="checkbox" 
		testId="AllowCoop" 
		label="Allow Coop" 
		alt="Allow cooperative play" 
		value={allowCoop} 
	/>

</div>

