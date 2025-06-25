<script lang="ts">
    // Define menu structure for easier management
    const menuStructure = [
        {
            title: "INI",
            items: [
                "Details", "Steam", "Backups", "Steam Workshop", "Mods", 
                "Map", "Spawn Regions", "Players", "Admin", "Fire", 
                "PVP", "Loot", "Faction", "Safehouse", "Chat", 
                "RCON", "Discord", "UPnP", "Other", "Vehicles", "Voice"
            ]
        },
        {
            title: "Sandbox",
            items: [
                "Presets", "Population", "Time", "World", "Nature",
                "Sadistic AI Director", "Meta", "Loot Rarity", "Character",
                "In-game Map", "Vehicles", "Zombie Lore", "Advanced Zombie Options"
            ]
        }
    ];

    // Track which section is expanded
    let expandedSections: { [key: string]: boolean } = {
        "INI": true,
        "Sandbox": true
    };
    
    // Track the currently selected menu item
    let selectedItem = "Details";
    
    // Function to handle menu item clicks
    function handleMenuItemClick(item: string) {
        selectedItem = item;
    }
    
    // Function to toggle section expansion
    function toggleSection(section: string) {
        expandedSections[section] = !expandedSections[section];
    }
</script>

<div class="flex items-center justify-center h-screen w-full">
  <div class="w-full h-full max-w-[2304px] max-h-[1229px] bg-[url('/background.png')] bg-center bg-no-repeat bg-cover p-10">
    <div class="h-full border-neutral-700 border-1 bg-black/30 flex flex-col">
        <!-- Header -->
        <div class="flex justify-center p-1">
            <h1 class="text-white text-2xl md:text-3xl pz-font">Edit Server Settings</h1> 
        </div>
        
        <!-- Main content area -->
        <div class="flex-grow flex flex-row">
            <!-- Left sidebar / menu -->
            <div class="w-[400px] border-1 border-neutral-700 ml-5 bg-black/30 text-white overflow-y-auto">
                {#each menuStructure as section}
                    <div>
                        <!-- Section header -->
                        <button
                            type="button"
                            class="sidebar-item flex items-center pl-2 h-7 bg-neutral-100/20 cursor-pointer w-full text-left"
                            aria-expanded={expandedSections[section.title]}
                            aria-controls="section-{section.title}"
                            on:click={() => toggleSection(section.title)}
                        >
                            <span class="triangle-down mr-2">
                                {#if expandedSections[section.title]}
                                    &#9660;
                                {:else}
                                    &#9654;
                                {/if}
                            </span>
                            <span>{section.title}</span>
                        </button>
                        
                        <!-- Section items -->
                        {#if expandedSections[section.title]}
                            {#each section.items as item}
                                <button
                                    type="button"
                                    class="{selectedItem === item ? 'bg-amber-900/70' : ''} pl-10 h-7 border-1 border-neutral-100/20 hover:bg-neutral-100/10 cursor-pointer w-full text-left"
                                    on:click={() => handleMenuItemClick(item)}
                                    aria-current={selectedItem === item ? "page" : undefined}
                                >
                                    {item}
                                </button>
                            {/each}
                        {/if}
                    </div>
                {/each}
            </div>
            
            <!-- Main content area -->
            <div class="flex-1 border-1 border-neutral-700 ml-5 mr-5 bg-black/30 text-white p-4">
                {#if selectedItem}
                    <div>
                        <h2 class="text-xl mb-4">{selectedItem} Settings</h2>
                        
                            <div class="text-neutral-300">
                                Settings for {selectedItem} will appear here.
                            </div>
                                            </div>
                {:else}
                    <div class="flex items-center justify-center h-full">
                        <p class="text-neutral-400">Select a menu item from the left sidebar.</p>
                    </div>
                {/if}
            </div>
        </div>
        
        <!-- Footer -->
        <div class="flex justify-end space-x-4 p-4">
            <button class="border border-neutral-600 bg-black/70 text-white px-6 py-1">SAVE</button>
        </div>
    </div>
  </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    
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

    /* Custom border width since Tailwind uses other sizes by default */
    .border-1 {
        border-width: 1px;
    }
    
    /* Define Project Zomboid font style */
    .pz-font {
        font-family: 'VT323', monospace;
        letter-spacing: 0.05em;
    }
</style>