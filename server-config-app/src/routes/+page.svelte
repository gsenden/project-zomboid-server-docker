<script lang="ts">
	// You can add any page-specific script logic here
</script>

<div class="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
	<div class="absolute inset-0 bg-[url('/background.png')] bg-center bg-no-repeat bg-contain opacity-50"></div>
	<div class="w-full h-full flex flex-col items-center pt-8 z-10 relative">
		<h1 class="text-white text-4xl font-bold text-center">Project Zomboid Server Config</h1>
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
</style>