<script lang="ts">
	import Setting from './Setting.svelte';

	interface Props {
		defaultPort: number;
		publicName: string;
		publicDescription: string;
	}

	let { defaultPort, publicName, publicDescription }: Props = $props();
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
</div>

