<script>
  const featured = {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    category: 'NEWS BRIEF',
    date: '11.04.26',
    image: null
  };

  const sideArticles = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, adipiscing elit.',
      date: '11.04.26',
      hasImage: true
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean eget dolor.',
      date: '11.04.26',
      hasImage: false
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, adipiscing elit.',
      date: '11.04.26',
      hasImage: true
    },
    {
      id: 4,
      title: 'Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus.',
      date: '09.04.26',
      hasImage: true
    },
    {
      id: 5,
      title: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      date: '05.04.26',
      hasImage: false
    }
  ];
</script>

<section class="py-12 lg:py-16 border-b border-white/20 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Title -->
    <h2 class="section-label">THE LATEST</h2>

    <!-- Two-column Editorial Grid with items-start to enable CSS Sticky positioning -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
      
      <!-- Left Column: Featured Major Article (STICKY) -->
      <!-- 'lg:sticky lg:top-8 self-start' enables it to stay fixed while sideArticles scroll, 
           and release once the user reaches the end of this grid container -->
      <article class="lg:col-span-7 flex flex-col group cursor-pointer lg:sticky lg:top-8 self-start">
        <!-- Main Image Placeholder -->
        <div class="w-full aspect-[16/10] bg-[#cce3d2] rounded-none overflow-hidden relative mb-6 transition-transform duration-300 group-hover:brightness-95 shadow-sm">
          <div class="absolute inset-0 flex items-center justify-center text-[#306947]/40 font-mono text-xs tracking-wider uppercase">
            Featured Image Placeholder
          </div>
          <!-- Subtle Badge indicating featured status -->
          <div class="absolute top-4 left-4 bg-[#306947]/80 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest">
            Headline
          </div>
        </div>

        <!-- Article Headline -->
        <h3 class="text-xl sm:text-2xl lg:text-[28px] font-bold text-white leading-snug mb-4 group-hover:underline underline-offset-4 transition-all">
          {featured.title}
        </h3>

        <!-- Article Excerpt -->
        <p class="text-xs sm:text-sm text-white/90 leading-relaxed font-normal mb-6">
          {featured.description}
        </p>

        <!-- Meta Tagging -->
        <div class="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-white/80">
          <span class="text-white font-extrabold">{featured.category}</span>
          <span>{featured.date}</span>
        </div>
      </article>

      <!-- Right Column: Secondary Stories that scroll continuously -->
      <div class="lg:col-span-5 flex flex-col gap-8 sm:gap-10">
        {#each sideArticles as article}
          <article class="flex flex-col group cursor-pointer border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
            {#if article.hasImage}
              <!-- Thumbnail Box -->
              <div class="w-full aspect-[16/9] bg-[#cce3d2] rounded-none mb-3 overflow-hidden relative transition-transform duration-300 group-hover:brightness-95 shadow-sm">
                <div class="absolute inset-0 flex items-center justify-center text-[#306947]/40 font-mono text-xs">
                  Thumbnail
                </div>
              </div>
            {/if}

            <h4 class="text-sm sm:text-base font-bold text-white leading-snug mb-2 group-hover:underline underline-offset-2">
              {article.title}
            </h4>
            <span class="text-[11px] font-medium text-white/80">
              {article.date}
            </span>
          </article>
        {/each}
      </div>

    </div>
  </div>
</section>
