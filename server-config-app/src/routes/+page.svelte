<script lang="ts">
	// You can add any page-specific script logic here
</script>

<div class="flex items-center justify-center h-screen w-full">
  <div class="w-full h-full max-w-[2304px] max-h-[1229px] bg-[url('/background.png')] bg-center bg-no-repeat bg-cover p-10">
    <div class="h-full border-neutral-700 border-1 bg-black/30 flex flex-col">
        <div class="flex justify-center p-1">
            <h1 class="text-white text-2xl md:text-3xl courier-prime-regular">Edit Server Settings</h1> 
        </div>
        <div class="flex-grow flex flex-row">
            <div class="w-[400px] border-1 border-neutral-700 ml-5 bg-black/30">
                
            </div>
            
            <div class="flex-1 border-1 border-neutral-700 ml-5 mr-5 bg-black/30">
                
            </div>
        </div>
        
        <div class="border-1 border-blue-500 m-5 mb-2 h-10 text-white">footer</div>
    </div>
  </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
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

    .courier-prime-regular {
        font-family: 'Courier Prime', monospace;
        font-weight: 400;
        letter-spacing: 0.05em;
    }
</style>