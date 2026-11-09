<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  export let heroVideoSrc = '';

  let selectedCategory = 'CATEGORIES';
  let selectedMonth = 'FEBRUARY';
  let isCategoryOpen = false;
  let isMonthOpen = false;

  const categories = [
    'ALL CATEGORIES',
    'Scientist Spotlight',
    'Ocean Stories',
    'Global Health Talks',
    'Field Notes',
    'Policy Debates'
  ];

  const months = [
    'ALL MONTHS',
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ];

  let episodes = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    title: 'Lorem',
    subtitle: `Episode #${i + 1}`,
    category: categories[(i % (categories.length - 1)) + 1],
    month: months[(i % 12) + 1],
    date: `${10 + (i % 18)}.02.26`,
    image: null
  }));

  function toggleCategoryDropdown() {
    isCategoryOpen = !isCategoryOpen;
    if (isCategoryOpen) isMonthOpen = false;
  }

  function toggleMonthDropdown() {
    isMonthOpen = !isMonthOpen;
    if (isMonthOpen) isCategoryOpen = false;
  }

  function selectCategory(cat) {
    selectedCategory = cat === 'ALL CATEGORIES' ? 'CATEGORIES' : cat;
    isCategoryOpen = false;
  }

  function selectMonth(m) {
    selectedMonth = m === 'ALL MONTHS' ? 'MONTH' : m;
    isMonthOpen = false;
  }

  $: filteredEpisodes = episodes.filter(item => {
    const matchCategory = selectedCategory === 'CATEGORIES' || item.category === selectedCategory;
    const matchMonth = selectedMonth === 'MONTH' || selectedMonth === 'FEBRUARY' || item.month === selectedMonth;
    return matchCategory && matchMonth;
  });
</script>

<div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
  <Navbar />

  <main class="flex-grow">
    <!-- Hero Section -->
    <section class="relative w-full pt-16 pb-16 sm:pt-20 sm:pb-24 border-b border-white/20 overflow-hidden">
      <div class="absolute inset-0 w-full h-full z-0 bg-[#306947] overflow-hidden">
        {#if heroVideoSrc}
          <video autoplay loop muted playsinline class="w-full h-full object-cover object-center scale-105">
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        {:else}
          <div class="w-full h-full bg-[#35724f] relative flex items-center justify-center">
            <div class="absolute inset-0 opacity-15 bg-[radial-gradient(#cce3d2_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-15 overflow-hidden">
              <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mb-4">VIDEO</div>
              <div class="flex gap-12 text-6xl sm:text-8xl font-black text-white tracking-[0.25em]">
                <span>VIDEO</span><span>VIDEO</span>
              </div>
              <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mt-4">VIDEO</div>
            </div>
          </div>
        {/if}
        <div class="absolute inset-0 bg-gradient-to-b from-[#3b7e57]/95 via-[#3b7e57]/85 to-[#3b7e57] mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-black/15"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-6">
            Podcast
          </h1>
          <p class="text-sm sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </section>

    <!-- Grid Section -->
    <section class="pt-10 pb-24 sm:pt-14 sm:pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Dual Filter -->
        <div class="mb-10 flex flex-wrap items-center gap-4 relative z-20">
          <div class="relative">
            <button
              type="button"
              on:click={toggleCategoryDropdown}
              class="inline-flex items-center gap-3 px-4 py-2 border border-white text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#3b7e57] transition-all rounded-none focus:outline-none"
            >
              <span>{selectedCategory}</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200 {isCategoryOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {#if isCategoryOpen}
              <div class="absolute left-0 mt-2 w-64 bg-[#2d6445] border border-white/20 shadow-2xl py-2 rounded-none z-30 animate-fadeIn">
                {#each categories as cat}
                  <button
                    type="button"
                    on:click={() => selectCategory(cat)}
                    class="w-full text-left px-4 py-2.5 text-xs text-white hover:bg-white/15 transition-colors flex items-center justify-between {selectedCategory === cat ? 'font-bold bg-white/10' : 'font-normal'}"
                  >
                    <span>{cat}</span>
                    {#if selectedCategory === cat || (cat === 'ALL CATEGORIES' && selectedCategory === 'CATEGORIES')}
                      <span class="text-xs text-emerald-300">✓</span>
                    {/if}
                  </button>
                {/each}
              </div>
            {/if}
          </div>

          <div class="relative">
            <button
              type="button"
              on:click={toggleMonthDropdown}
              class="inline-flex items-center gap-3 px-4 py-2 border border-white text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#3b7e57] transition-all rounded-none focus:outline-none"
            >
              <span>{selectedMonth}</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200 {isMonthOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {#if isMonthOpen}
              <div class="absolute left-0 mt-2 w-48 bg-[#2d6445] border border-white/20 shadow-2xl py-2 rounded-none z-30 animate-fadeIn max-h-60 overflow-y-auto">
                {#each months as m}
                  <button
                    type="button"
                    on:click={() => selectMonth(m)}
                    class="w-full text-left px-4 py-2 text-xs text-white hover:bg-white/15 transition-colors flex items-center justify-between {selectedMonth === m ? 'font-bold bg-white/10' : 'font-normal'}"
                  >
                    <span>{m}</span>
                    {#if selectedMonth === m}
                      <span class="text-xs text-emerald-300">✓</span>
                    {/if}
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        </div>

        <!-- 3-Column Grid (22 cards) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {#each filteredEpisodes as item}
            <article class="group relative aspect-[4/3] bg-[#cce3d2] overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {#if item.image}
                <img src={item.image} alt={item.title} class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              {:else}
                <div class="w-full h-full bg-[#cce3d2] flex items-center justify-center relative">
                  <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest group-hover:text-[#306947]/50 transition-colors">
                    Episode #{item.id}
                  </span>
                </div>
              {/if}
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
                <h3 class="text-2xl sm:text-[26px] font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                {#if item.subtitle}
                  <span class="text-[11px] text-white/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subtitle} • {item.date} →
                  </span>
                {/if}
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>

