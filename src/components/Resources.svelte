<script>
  let mosaicIndex = 0;

  function prevMosaic() {
    mosaicIndex = (mosaicIndex - 1 + 3) % 3;
  }

  function nextMosaic() {
    mosaicIndex = (mosaicIndex + 1) % 3;
  }
</script>

<section class="py-12 border-b border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Title -->
    <h2 class="section-label">RESOURCES</h2>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Left Column: Text & Explore Button -->
      <div class="lg:col-span-5 flex flex-col justify-between">
        <div>
          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Lorem ipsum dolor sit amet
          </h3>

          <p class="text-xs sm:text-sm text-white/85 leading-relaxed font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <div class="mb-10">
            <a href="#explore" class="btn-outline group">
              <span class="text-[10px] transform group-hover:translate-x-0.5 transition-transform">▸</span>
              <span>EXPLORE</span>
            </a>
          </div>
        </div>

        <!-- Arrow Navigation Controls -->
        <div class="flex items-center gap-4">
          <button 
            type="button" 
            on:click={prevMosaic}
            class="icon-arrow-btn"
            aria-label="Previous resources"
          >
            <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            type="button" 
            on:click={nextMosaic}
            class="icon-arrow-btn"
            aria-label="Next resources"
          >
            <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Right Column: Staggered Mosaic / Masonry Image Grid -->
      <div class="lg:col-span-7">
        <div class="grid grid-cols-3 gap-3 sm:gap-4 items-center">
          
          <!-- Column 1 -->
          <div class="flex flex-col gap-3 sm:gap-4">
            <div class="aspect-[4/3] bg-[#cce3d2] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform flex items-center justify-center">
              <span class="text-[#306947]/40 font-mono text-[11px]">Res 1</span>
            </div>
            <div class="aspect-[1/1] bg-[#cce3d2] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform flex items-center justify-center">
              <span class="text-[#306947]/40 font-mono text-[11px]">Res 2</span>
            </div>
          </div>

          <!-- Column 2 (Offset / Staggered) -->
          <div class="flex flex-col gap-3 sm:gap-4 -translate-y-3 sm:-translate-y-5">
            <div class="aspect-[1/1] bg-[#cce3d2] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform flex items-center justify-center">
              <span class="text-[#306947]/40 font-mono text-[11px]">Res 3</span>
            </div>
            <div class="aspect-[4/5] bg-[#cce3d2] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform flex items-center justify-center">
              <span class="text-[#306947]/40 font-mono text-[11px]">Res 4</span>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="flex flex-col gap-3 sm:gap-4">
            <div class="aspect-[4/3] bg-[#cce3d2] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform flex items-center justify-center">
              <span class="text-[#306947]/40 font-mono text-[11px]">Res 5</span>
            </div>
            <div class="aspect-[1/1] bg-[#cce3d2] overflow-hidden shadow-sm hover:scale-[1.02] transition-transform flex items-center justify-center">
              <span class="text-[#306947]/40 font-mono text-[11px]">Res 6</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

