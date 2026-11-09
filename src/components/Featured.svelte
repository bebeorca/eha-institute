<script>
  const cards = [
    {
      id: 'careers',
      title: 'Careers',
      link: '#careers',
      subtitle: 'Join our interdisciplinary team'
    },
    {
      id: 'publications',
      title: 'Publications',
      link: '#publications',
      subtitle: 'Read our latest research papers'
    },
    {
      id: 'expeditions',
      title: 'Expeditions',
      link: '#expeditions',
      subtitle: 'Explore field projects worldwide'
    }
  ];
</script>

<section class="py-12 border-b border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Title -->
    <h2 class="section-label">FEATURED</h2>

    <!-- 3 Tall Columns -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {#each cards as card}
        <a 
          href={card.link}
          class="group block relative aspect-[3/4] bg-[#cce3d2] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Subtle gradient overlay at bottom for maximum text contrast -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

          <!-- Decorative inner label placeholder -->
          <div class="absolute top-4 right-4 text-[11px] font-mono uppercase tracking-widest text-[#306947]/60 group-hover:text-white transition-colors">
            Featured
          </div>

          <!-- Bottom Content -->
          <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end">
            <h3 class="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
              {card.title}
            </h3>
            <span class="text-xs text-white/80 font-normal mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {card.subtitle} →
            </span>
          </div>
        </a>
      {/each}
    </div>

  </div>
</section>

