<script lang="ts">
	import Setting from './Setting.svelte';

	interface Props {
		defaultPort: number;
		publicName: string;
		publicDescription: string;
		isPublic: boolean;
	}

	let { defaultPort, publicName, publicDescription, isPublic: isPublic }: Props = $props();
</script>

<div class="space-y-4">
	<Setting 
		type="number" 
		testId="DefaultPort" 
		label="DefaultPort" 
		alt="The default network port for the server (typically 16261)" 
		value={defaultPort} 
	/>

    <Setting 
		type="string" 
		testId="PublicName" 
		label="PublicName" 
		alt="The name that appears in the server browser" 
		value={publicName} 
	/>

    <Setting 
		type="description" 
		testId="PublicDescription" 
		label="PublicDescription" 
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
		value={isPublic} 
	/>

	<Setting 
		type="checkbox" 
		testId="PauseEmpty" 
		label="PauseEmpty" 
		alt="Whether the server should pause when empty" 
		value={isPublic} 
	/>

	<Setting 
		type="string" 
		testId="ResetID" 
		label="ResetID" 
		alt="The ID used to reset the server" 
		value={isPublic} 
	/>
</div>

