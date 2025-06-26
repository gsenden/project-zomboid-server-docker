<script lang="ts">
	interface Props {
        type: string;
		testId: string;
		label: string;
		alt: string;
		value: string | number | boolean;
	}

	let { type, testId, label, alt, value }: Props = $props();
</script>

<div data-testid={testId} class="flex {type === 'description' ? 'items-start' : 'items-center'} gap-4">
	<label 
		for={testId} 
		class="text-white w-55 flex-shrink-0 text-right"
		>{label}</label>
	
	{#if type === 'description'}
		<textarea 
			id={testId} 
			title={alt}
			value={String(value)}
			rows="3"
			class="bg-black/30 text-white border border-neutral-700 p-1 w-150 resize-none"
		></textarea>
	{:else if type === 'checkbox'}
		<input 
			type="checkbox" 
			id={testId} 
			title={alt}
			checked={Boolean(value)}
			class="bg-black/30 text-white border border-neutral-700 p-1"
		/>
	{:else}
		<input 
			type={type} 
			id={testId} 
			title={alt}
			value={value}
			inputmode={type === 'number' ? 'numeric' : undefined}
			class="bg-black/30 text-white border border-neutral-700 p-1 w-150"
		/>
	{/if}
</div>
