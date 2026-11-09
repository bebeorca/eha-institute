<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  // 13 Research area cards as shown in the Figma design (6 rows of 2, plus 1 in the 7th row)
  export let researchAreas = [
    { id: 1, title: 'Lorem', subtitle: 'Biodiversity & Conservation', image: null },
    { id: 2, title: 'Lorem', subtitle: 'Ocean Ecology & Climate', image: null },
    { id: 3, title: 'Lorem', subtitle: 'Molecular Genetics', image: null },
    { id: 4, title: 'Lorem', subtitle: 'Epidemiological Surveillance', image: null },
    { id: 5, title: 'Lorem', subtitle: 'Environmental Chemistry', image: null },
    { id: 6, title: 'Lorem', subtitle: 'Computational Biology', image: null },
    { id: 7, title: 'Lorem', subtitle: 'Deep Sea Exploration', image: null },
    { id: 8, title: 'Lorem', subtitle: 'Sustainable Aquaculture', image: null },
    { id: 9, title: 'Lorem', subtitle: 'Ecological Genomics', image: null },
    { id: 10, title: 'Lorem', subtitle: 'Microbial Ecology', image: null },
    { id: 11, title: 'Lorem', subtitle: 'Spatial Data & Remote Sensing', image: null },
    { id: 12, title: 'Lorem', subtitle: 'Policy & Environmental Law', image: null },
    { id: 13, title: 'Lorem', subtitle: 'Community Health Interventions', image: null },
  ];

  export let heroVideoSrc = ''; // Optional background video URL
</script>

<div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
  <!-- Top Navigation Bar -->
  <Navbar />

  <main class="flex-grow">
    
    <!-- ======================================================== -->
    <!-- HERO SECTION: Main Research Areas                        -->
    <!-- Full-width hero with media background & gradient overlay -->
    <!-- ======================================================== -->
    <section class="relative w-full pt-16 pb-16 sm:pt-20 sm:pb-24 border-b border-white/20 overflow-hidden">
      
      <!-- Background Layer: Video / Placeholder with watermark -->
      <div class="absolute inset-0 w-full h-full z-10 bg-[#306947] overflow-hidden">
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
        <div class="max-w-4xl">
          <!-- Main Page Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-6">
            Main Research Areas
          </h1>

          <!-- Descriptive Subtitle Paragraph -->
          <p class="text-sm sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- RESEARCH AREAS GRID: 2 Columns of Large Cards (13 Total) -->
    <!-- ======================================================== -->
    <section class="pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- 2-Column Responsive Grid matching the design -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {#each researchAreas as item, index}
            <article 
              class="group relative aspect-[16/11] sm:aspect-[4/3] bg-[#cce3d2] overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
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
                    Research Area #{index + 1}
                  </span>
                </div>
              {/if}

              <!-- Bottom Dark Vignette Gradient Overlay so 'Lorem' stands out sharply -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <!-- Card Bottom Label matching Figma ('Lorem') -->
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                {#if item.subtitle}
                  <span class="text-xs text-white/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

