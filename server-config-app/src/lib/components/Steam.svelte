<script lang="ts">
	import Setting from './Setting.svelte';

	interface Props {
		udpPort: number;
		maxAccountsPerUser: number;
		steamScoreBoard: boolean;
	}

	let { udpPort, maxAccountsPerUser, steamScoreBoard }: Props = $props();
</script>

<div class="space-y-4">
	<Setting 
		type="number" 
		testId="UDPPort" 
		label="UDP Port" 
		alt="The UDP port for the server (typically 16261)" 
		value={udpPort} 
	/>

    <Setting 
		type="number" 
		testId="MaxAccountsPerUser" 
		label="Max Accounts Per User" 
		alt="The maximum number of accounts per user (typically 1)" 
		value={maxAccountsPerUser} 
	/>

    <Setting 
		type="checkbox" 
		testId="SteamScoreBoard" 
		label="Enable Steam Scoreboard" 
		alt="Enable or disable the Steam Scoreboard feature" 
		value={steamScoreBoard} 
	/>

</div>