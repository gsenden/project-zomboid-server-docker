<script lang="ts">
	// You can add any page-specific script logic here
</script>

<div class="flex items-center justify-center h-screen w-full">
  <div class="w-full h-full max-w-[1920px] max-h-[1024px] bg-[url('/background.png')] bg-center bg-no-repeat bg-cover p-10">
    <div class="h-full border-neutral-600 border-1"></div>
  </div>
</div>


<style>
	/* Global styles that can't be done with Tailwind utilities */
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		background-color: #000;
	}

	:global(html, body) {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

    :global(.content) {
        border: 1px solid red;
    }
</style>