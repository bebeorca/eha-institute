<script>
  // Props for the background video source & fallback poster image
  export let videoSrc = ''; // Berikan path file video (contoh: '/videos/hero-video.mp4')
  export let posterSrc = ''; // Fallback image jika video belum siap

  let isVideoModalOpen = false;
  let isVideoPlaying = true;
  let videoElement;

  function togglePlayPause() {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        isVideoPlaying = true;
      } else {
        videoElement.pause();
        isVideoPlaying = false;
      }
    }
  }

  function openVideoModal() {
    isVideoModalOpen = true;
  }

  function closeVideoModal() {
    isVideoModalOpen = false;
  }
</script>

<!-- Hero Section with Full-width Large Background Video/Image -->
<section class="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden">
  
  <!-- BACKGROUND LAYER: Large Video or Placeholder Image -->
  <div class="absolute inset-0 w-full h-full z-10 bg-[#306947] overflow-hidden">
    {#if videoSrc}
      <!-- HTML5 Autoplay Background Video -->
      <video
        bind:this={videoElement}
        autoplay
        loop
        muted
        playsinline
        poster={posterSrc}
        class="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
      >
        <source src={videoSrc} type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
    {:else}
      <!-- Placeholder Video/Image Container saat video belum diisi -->
      <div class="w-full h-full bg-[#35724f] relative flex items-center justify-center">
        <!-- Visual pattern placeholder representing background video -->
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#cce3d2_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <!-- Faded 'VIDEO' watermark motif matching Figma frame wireframe -->
        <div class="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-15 overflow-hidden">
          <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mb-4">VIDEO</div>
          <div class="flex gap-12 text-6xl sm:text-8xl font-black text-white tracking-[0.25em]">
            <span>VIDEO</span>
            <span>VIDEO</span>
          </div>
          <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mt-4">VIDEO</div>
        </div>

        <!-- Placeholder Tag Indicator -->
        <div class="absolute bottom-6 right-6 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-mono text-white/80 border border-white/10 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Background Video Container (Full-Width)</span>
        </div>
      </div>
    {/if}

    <!-- Dark Green Gradient Overlay: Ensures text is high contrast & matches Figma aesthetics -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#3b7e57]/95 via-[#3b7e57]/80 to-[#3b7e57]/65 mix-blend-multiply"></div>
    <div class="absolute inset-0 bg-black/20"></div>
  </div>

  <!-- FOREGROUND CONTENT: Headline & Our Story Play Trigger -->
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
    <div class="max-w-3xl">
      <!-- Main Bold Headline -->
      <h1 class="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.15] tracking-tight mb-10 drop-shadow-sm">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      </h1>

      <!-- Our Story Button with Circular Play Trigger -->
      <div class="flex items-center gap-6">
        <button 
          type="button" 
          on:click={openVideoModal}
          class="inline-flex items-center gap-4 group focus:outline-none"
          aria-label="Play our story video"
        >
          <!-- Circular Play Icon Button -->
          <div class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#3b7e57] shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <svg class="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <!-- Text Label -->
          <span class="text-sm sm:text-base font-bold tracking-widest uppercase text-white group-hover:underline underline-offset-6 transition-all">
            OUR STORY
          </span>
        </button>

        {#if videoSrc}
          <!-- Video background pause/play toggle button if video is active -->
          <button 
            type="button"
            on:click={togglePlayPause}
            class="text-xs uppercase tracking-wider text-white/70 hover:text-white border border-white/20 hover:border-white/60 px-3 py-1.5 rounded transition-colors"
          >
            {isVideoPlaying ? 'Pause Background' : 'Play Background'}
          </button>
        {/if}
      </div>
    </div>
  </div>

  <!-- Optional Modal Player (opens in high-quality modal when user clicks 'OUR STORY') -->
  {#if isVideoModalOpen}
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div class="relative max-w-4xl w-full bg-[#1e442f] border border-white/20 rounded-xl overflow-hidden shadow-2xl">
        <!-- Close Button -->
        <button 
          on:click={closeVideoModal}
          class="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full focus:outline-none transition-colors"
          aria-label="Close video player"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Player Screen -->
        <div class="aspect-video w-full bg-black flex flex-col items-center justify-center relative">
          {#if videoSrc}
            <video controls autoplay class="w-full h-full">
              <source src={videoSrc} type="video/mp4" />
              Browser Anda tidak mendukung tag video.
            </video>
          {:else}
            <!-- Empty state in modal -->
            <div class="p-8 text-center flex flex-col items-center">
              <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-4">
                <svg class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <h4 class="text-lg font-bold text-white uppercase tracking-wider mb-2">Video Placeholder - Our Story</h4>
              <p class="text-xs text-white/70 max-w-md mb-4 leading-relaxed">
                Tempatkan file video Anda di folder <code class="bg-black/40 px-1 py-0.5 rounded text-emerald-300 font-mono">public/videos/our-story.mp4</code> dan pass properti <code class="bg-black/40 px-1 py-0.5 rounded text-emerald-300 font-mono">videoSrc</code> pada Hero.svelte.
              </p>
              <button 
                on:click={closeVideoModal}
                class="px-4 py-1.5 bg-white text-[#3b7e57] font-bold text-xs uppercase tracking-wider rounded hover:bg-white/90 transition-colors"
              >
                Tutup
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}

</section>
