<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  export let heroVideoSrc = '';

  let activeTab = 'current'; // 'current' | 'past'
  let selectedFocusArea = 'ALL FOCUS AREAS';
  let isFilterDropdownOpen = false;

  const focusAreas = [
    'ALL FOCUS AREAS',
    'Peer-Reviewed Journals',
    'Policy Briefs & White Papers',
    'Technical Field Reports',
    'Monographs & Book Chapters',
    'Conference Proceedings'
  ];

  // 24 cards for Current Projects (8 full rows of 3) as shown in the Figma design
  let currentProjects = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: 'Lorem',
    subtitle: `Scientific Paper & Report #${i + 1}`,
    category: focusAreas[(i % (focusAreas.length - 1)) + 1],
    image: null,
    status: 'Current'
  }));

  // Past Projects archive
  let pastProjects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 101,
    title: 'Lorem',
    subtitle: `Archived Publication #${i + 1}`,
    category: focusAreas[(i % (focusAreas.length - 1)) + 1],
    image: null,
    status: 'Past'
  }));

  function setTab(tab) {
    activeTab = tab;
  }

  function selectFilter(area) {
    selectedFocusArea = area;
    isFilterDropdownOpen = false;
  }

  $: activeList = activeTab === 'current' ? currentProjects : pastProjects;

  $: filteredList = selectedFocusArea === 'ALL FOCUS AREAS'
    ? activeList
    : activeList.filter(item => item.category === selectedFocusArea);
</script>

<div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
  <!-- Top Navigation Bar -->
  <Navbar />

  <main class="flex-grow">
    
    <!-- ======================================================== -->
    <!-- HERO SECTION: Scientific Writing                         -->
    <!-- Full-width hero with media background, tabs & separator  -->
    <!-- ======================================================== -->
    <section class="relative w-full pt-16 pb-0 sm:pt-20 border-b border-white/20 overflow-hidden">
      
      <!-- Background Layer: Video / Placeholder with watermark (z-0 sits above page bg, below z-10 content) -->
      <div class="absolute inset-0 w-full h-full z-0 bg-[#306947] overflow-hidden">
        {#if heroVideoSrc}
          <video
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover object-center scale-105"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        {:else}
          <!-- Placeholder container with repeating 'VIDEO' watermark matching Figma frame -->
          <div class="w-full h-full bg-[#35724f] relative flex items-center justify-center">
            <div class="absolute inset-0 opacity-15 bg-[radial-gradient(#cce3d2_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-15 overflow-hidden">
              <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mb-4">VIDEO</div>
              <div class="flex gap-12 text-6xl sm:text-8xl font-black text-white tracking-[0.25em]">
                <span>VIDEO</span>
                <span>VIDEO</span>
              </div>
              <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mt-4">VIDEO</div>
            </div>
          </div>
        {/if}

        <!-- Dark Green Gradient Overlay for contrast -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#3b7e57]/95 via-[#3b7e57]/85 to-[#3b7e57] mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-black/15"></div>
      </div>

      <!-- Hero Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mb-12 sm:mb-16">
          <!-- Main Page Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-6">
            Scientific Writing
          </h1>

          <!-- Descriptive Subtitle Paragraph -->
          <p class="text-sm sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <!-- Tab Navigation: Current Projects | Past Projects -->
        <div class="flex items-center gap-8 text-sm sm:text-base font-bold tracking-tight">
          <!-- Tab 1: Current Projects -->
          <button
            type="button"
            on:click={() => setTab('current')}
            class="relative py-3 focus:outline-none transition-colors {activeTab === 'current' ? 'text-white' : 'text-white/60 hover:text-white/90'}"
          >
            <span>Current Projects</span>
            {#if activeTab === 'current'}
              <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-full"></div>
            {/if}
          </button>

          <!-- Tab 2: Past Projects -->
          <button
            type="button"
            on:click={() => setTab('past')}
            class="relative py-3 focus:outline-none transition-colors {activeTab === 'past' ? 'text-white' : 'text-white/60 hover:text-white/90'}"
          >
            <span>Past Projects</span>
            {#if activeTab === 'past'}
              <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-full"></div>
            {/if}
          </button>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- CONTENT SECTION: Filter Button & 3-Column Grid           -->
    <!-- ======================================================== -->
    <section class="pt-10 pb-24 sm:pt-14 sm:pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Filter Bar Button: ALL FOCUS AREAS ▾ -->
        <div class="mb-10 relative inline-block z-20">
          <button
            type="button"
            on:click={() => isFilterDropdownOpen = !isFilterDropdownOpen}
            class="inline-flex items-center gap-3 px-4 py-2 border border-white text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#3b7e57] transition-all rounded-none focus:outline-none"
            aria-expanded={isFilterDropdownOpen}
          >
            <span>{selectedFocusArea}</span>
            <svg 
              class="w-3.5 h-3.5 transition-transform duration-200 {isFilterDropdownOpen ? 'rotate-180' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Filter Dropdown Menu -->
          {#if isFilterDropdownOpen}
            <div class="absolute left-0 mt-2 w-72 bg-[#2d6445] border border-white/20 shadow-2xl py-2 rounded-none z-30 animate-fadeIn">
              {#each focusAreas as area}
                <button
                  type="button"
                  on:click={() => selectFilter(area)}
                  class="w-full text-left px-4 py-2.5 text-xs text-white hover:bg-white/15 transition-colors flex items-center justify-between {selectedFocusArea === area ? 'font-bold bg-white/10' : 'font-normal'}"
                >
                  <span>{area}</span>
                  {#if selectedFocusArea === area}
                    <span class="text-xs text-emerald-300">✓</span>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <!-- 3-Column Responsive Grid matching the design (24 cards total for Current Projects) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {#each filteredList as item}
            <article 
              class="group relative aspect-[4/3] bg-[#cce3d2] overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <!-- Optional Card Image -->
              {#if item.image}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                />
              {:else}
                <!-- Default Placeholder Pattern with Subtle Tag -->
                <div class="w-full h-full bg-[#cce3d2] flex items-center justify-center relative">
                  <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest group-hover:text-[#306947]/50 transition-colors">
                    Writing #{item.id}
                  </span>
                </div>
              {/if}

              <!-- Bottom Dark Vignette Gradient Overlay so 'Lorem' stands out sharply -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <!-- Card Bottom Label matching Figma ('Lorem') -->
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
                <h3 class="text-2xl sm:text-[26px] font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                {#if item.subtitle}
                  <span class="text-[11px] text-white/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subtitle} →
                  </span>
                {/if}
              </div>
            </article>
          {/each}
        </div>

      </div>
    </section>

  </main>

  <!-- Dark Footer -->
  <Footer />
</div>

