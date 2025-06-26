<script lang="ts">
	interface Props {
        type: string;
		testId: string;
		label: string;
		alt: string;
		value: string | number;
	}

	let { type, testId, label, alt, value }: Props = $props();
</script>

<div data-testid={testId} class="flex items-center gap-4">
	<label 
		for={testId} 
		class="text-white w-48 flex-shrink-0 text-right"
		>{label}</label>
	<input 
		type={type} 
		id={testId} 
		title={alt}
		value={value}
		inputmode={type === 'number' ? 'numeric' : undefined}
		class="bg-black/30 text-white border border-neutral-700 p-1 w-150"
	/>
</div>
