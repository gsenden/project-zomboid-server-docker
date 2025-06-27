<script lang="ts">
	import Setting from './Setting.svelte';

	interface Props {
		backupsCount: number;
		backupsOnStart: boolean;
		backupsOnVersionChange: boolean;
		backupsPeriod: number;
	}

	let { backupsCount, backupsOnStart, backupsOnVersionChange, backupsPeriod }: Props = $props();
</script>

<div class="space-y-2">
	<Setting 
		type="number" 
		testId="BackupsCount" 
		label="Backups Count" 
		alt="The number of backups to keep" 
		value={backupsCount} 
	/>

	<Setting 
		type="checkbox" 
		testId="BackupsOnStart" 
		label="Backups On Start" 
		alt="Whether to create a backup when the server starts" 
		value={backupsOnStart} 
	/>

	<Setting 
		type="checkbox" 
		testId="BackupsOnVersionChange" 
		label="Backups On Version Change" 
		alt="Whether to create a backup when the server version changes" 
		value={backupsOnVersionChange} 
	/>

	<Setting 
		type="number" 
		testId="BackupsPeriod" 
		label="Backups Period" 
		alt="The period between automatic backups (in minutes)" 
		value={backupsPeriod} 
	/>
</div>