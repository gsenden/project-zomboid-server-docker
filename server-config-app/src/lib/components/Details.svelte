<script lang="ts">
	import Setting from './Setting.svelte';

	interface Props {
		defaultPort: number;
		publicName: string;
		publicDescription: string;
		isPublic: boolean;
		password: string;
		pauseEmpty: boolean;
		resetID: string;
	}

	let { defaultPort, publicName, publicDescription, isPublic: isPublic, password, pauseEmpty, resetID }: Props = $props();
</script>

<div class="space-y-4">
	<Setting 
		type="number" 
		testId="DefaultPort" 
		label="Default Port" 
		alt="The default network port for the server (typically 16261)" 
		value={defaultPort} 
	/>

    <Setting 
		type="string" 
		testId="PublicName" 
		label="Public Name" 
		alt="The name that appears in the server browser" 
		value={publicName} 
	/>

    <Setting 
		type="description" 
		testId="PublicDescription" 
		label="Public Description" 
		alt="The description that appears in the server browser" 
		value={publicDescription} 
	/>

	<Setting 
		type="checkbox" 
		testId="Public" 
		label="Public" 
		alt="Whether the server is publicly accessible" 
		value={isPublic} 
	/>

	<Setting 
		type="string" 
		testId="Password" 
		label="Password" 
		alt="The password required to join the server" 
		value={password} 
	/>

	<Setting 
		type="checkbox" 
		testId="PauseEmpty" 
		label="Pause Empty" 
		alt="Whether the server should pause when empty" 
		value={pauseEmpty} 
	/>

	<Setting 
		type="string" 
		testId="ResetID" 
		label="Reset ID" 
		alt="The ID used to reset the server" 
		value={resetID} 
	/>
</div>

