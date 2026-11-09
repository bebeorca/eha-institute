<script>
  let currentEventIndex = 0;

  const events = [
    {
      month: 'JULY',
      day: '15',
      category: 'SEMINAR',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      dateFormatted: '15.07.26'
    },
    {
      month: 'AUG',
      day: '08',
      category: 'SYMPOSIUM',
      title: 'Aenean commodo ligula',
      description: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      dateFormatted: '08.08.26'
    }
  ];

  function prevEvent() {
    currentEventIndex = (currentEventIndex - 1 + events.length) % events.length;
  }

  function nextEvent() {
    currentEventIndex = (currentEventIndex + 1) % events.length;
  }
</script>

<section class="py-12 border-b border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section Title -->
    <h2 class="section-label">UPCOMING EVENTS</h2>

    <!-- Event Card -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white/5 border border-white/10 p-6 sm:p-8">
      
      <!-- Date Block (2 cols) -->
      <div class="md:col-span-2 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-6">
        <span class="text-xs sm:text-sm font-bold tracking-widest uppercase text-white/90">
          {events[currentEventIndex].month}
        </span>
        <span class="text-4xl sm:text-5xl font-black text-white leading-none mt-1">
          {events[currentEventIndex].day}
        </span>
      </div>

      <!-- Event Details (5 cols) -->
      <div class="md:col-span-5 flex flex-col justify-center">
        <span class="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-white/80 mb-2">
          {events[currentEventIndex].category}
        </span>
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          {events[currentEventIndex].title}
        </h3>
        <p class="text-xs sm:text-sm text-white/80 font-normal mb-4 leading-relaxed">
          {events[currentEventIndex].description}
        </p>
        <span class="text-xs font-semibold text-white/70">
          {events[currentEventIndex].dateFormatted}
        </span>
      </div>

      <!-- Image Box (5 cols) -->
      <div class="md:col-span-5">
        <div class="w-full aspect-[16/9] bg-[#cce3d2] flex items-center justify-center relative overflow-hidden">
          <span class="text-[#306947]/40 font-mono text-xs uppercase tracking-wider">
            Event Media
          </span>
        </div>
      </div>

    </div>

    <!-- Carousel Controls & View All -->
    <div class="mt-8 flex items-center gap-4">
      <button 
        type="button" 
        on:click={prevEvent}
        class="icon-arrow-btn"
        aria-label="Previous event"
      >
        <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        type="button" 
        on:click={nextEvent}
        class="icon-arrow-btn"
        aria-label="Next event"
      >
        <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <a 
        href="#all-events" 
        class="text-xs font-bold uppercase tracking-widest text-white hover:underline underline-offset-4 ml-2"
      >
        VIEW ALL
      </a>
    </div>

  </div>
</section>

