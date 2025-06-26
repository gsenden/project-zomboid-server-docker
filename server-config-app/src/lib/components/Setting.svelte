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

<div data-testid={testId}>
	<label for={testId}>{label}</label>
	<input 
		type={type} 
		id={testId} 
		title={alt}
		value={value}
		inputmode={type === 'number' ? 'numeric' : undefined}
	/>
</div>
