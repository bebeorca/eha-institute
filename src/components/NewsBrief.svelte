<script>
  let currentIndex = 0;

  const briefs = [
    {
      category: 'NEWS BRIEF',
      date: '11.02.26',
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      link: '#read-more'
    },
    {
      category: 'NEWS BRIEF',
      date: '28.01.26',
      title: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      excerpt: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
      link: '#read-more'
    }
  ];

  function prevBrief() {
    currentIndex = (currentIndex - 1 + briefs.length) % briefs.length;
  }

  function nextBrief() {
    currentIndex = (currentIndex + 1) % briefs.length;
  }
</script>

<section class="py-12 border-b border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Title -->
    <h2 class="section-label">NEWS BRIEF</h2>

    <!-- Featured News Brief Card (Split Container) -->
    <div class="grid grid-cols-1 md:grid-cols-12 bg-white/5 border border-white/10 rounded-none overflow-hidden shadow-sm">
      
      <!-- Left: Image Placeholder (5 cols) -->
      <div class="md:col-span-5 bg-[#cce3d2] min-h-[240px] sm:min-h-[300px] flex items-center justify-center relative">
        <span class="text-[#306947]/40 font-mono text-xs tracking-wider uppercase">
          Featured Image
        </span>
      </div>

      <!-- Right: Text Content (7 cols) -->
      <div class="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-[#34724e]/60">
        <div>
          <!-- Meta Info -->
          <div class="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-white/80 mb-4">
            <span class="font-extrabold text-white">{briefs[currentIndex].category}</span>
            <span>{briefs[currentIndex].date}</span>
          </div>

          <!-- Main Title -->
          <h3 class="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug mb-3">
            {briefs[currentIndex].title}
          </h3>

          <!-- Subtitle / Excerpt -->
          <p class="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-8">
            {briefs[currentIndex].excerpt}
          </p>
        </div>

        <!-- Read More Button -->
        <div>
          <a 
            href={briefs[currentIndex].link}
            class="btn-outline group"
          >
            <span class="text-[10px] transform group-hover:translate-x-0.5 transition-transform">▸</span>
            <span>READ MORE</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Carousel Controls & View All -->
    <div class="mt-8 flex items-center gap-4">
      <button 
        type="button" 
        on:click={prevBrief}
        class="icon-arrow-btn"
        aria-label="Previous brief"
      >
        <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        type="button" 
        on:click={nextBrief}
        class="icon-arrow-btn"
        aria-label="Next brief"
      >
        <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <a 
        href="#all-briefs" 
        class="text-xs font-bold uppercase tracking-widest text-white hover:underline underline-offset-4 ml-2"
      >
        VIEW ALL
      </a>
    </div>

  </div>
</section>

