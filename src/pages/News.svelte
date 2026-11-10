<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import { allNews, newsCategories as categories, newsYears as years } from '../data/newsData.js';

  export let heroVideoSrc = '';

  let selectedCategory = 'ALL';
  let selectedYear = 'ALL';
  let isCategoryOpen = false;
  let isYearOpen = false;

  let currentPage = 1;
  const itemsPerPage = 8;

  $: filteredNews = allNews.filter(item => {
    const matchCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchYear = selectedYear === 'ALL' || item.year === selectedYear;
    return matchCat && matchYear;
  });

  $: totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;
  $: paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  function selectCategory(val) {
    selectedCategory = val;
    isCategoryOpen = false;
    currentPage = 1;
  }

  function selectYear(val) {
    selectedYear = val;
    isYearOpen = false;
    currentPage = 1;
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  }

  // Article Modal Reader
  let activeArticle = null;
  function openArticle(item) {
    activeArticle = item;
  }
  function closeArticle() {
    activeArticle = null;
  }
</script>

<svelte:window on:click={() => { isCategoryOpen = false; isYearOpen = false; }} />

<div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
  <Navbar />

  <main class="flex-grow">
    
    <!-- Hero Section -->
    <section class="relative z-20 w-full pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-white/20">
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
        <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-8">
          News
        </h1>

        <!-- Filter Dropdown Controls (Matching Figma: ALL CATEGORIES & ALL YEARS) -->
        <div class="flex flex-wrap items-center gap-4 relative z-30">
          
          <!-- 1. Categories Dropdown -->
          <div class="relative">
            <button
              type="button"
              on:click|stopPropagation={() => { isCategoryOpen = !isCategoryOpen; isYearOpen = false; }}
              class="flex items-center gap-2.5 px-4 py-2 border border-white/60 bg-transparent text-white text-xs font-bold tracking-wider uppercase hover:bg-white/10 transition-colors focus:outline-none"
            >
              <span>{categories.find(c => c.value === selectedCategory)?.label || 'ALL CATEGORIES'}</span>
              <span class="text-[10px] transform transition-transform duration-200 {isCategoryOpen ? 'rotate-180' : ''}">▼</span>
            </button>

            {#if isCategoryOpen}
              <div 
                class="absolute top-full left-0 mt-1 w-52 bg-white text-gray-900 shadow-xl border border-gray-100 z-50 py-1.5 animate-fadeIn"
                role="menu"
                tabindex="-1"
                on:click|stopPropagation
                on:keydown|stopPropagation
              >
                {#each categories as cat}
                  <button
                    type="button"
                    role="menuitem"
                    on:click={() => selectCategory(cat.value)}
                    class="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-[#3b7e57] hover:text-white transition-colors {selectedCategory === cat.value ? 'bg-emerald-50 text-[#3b7e57] font-bold' : ''}"
                  >
                    {cat.label}
                  </button>
                {/each}
              </div>
            {/if}
          </div>

          <!-- 2. Years Dropdown -->
          <div class="relative">
            <button
              type="button"
              on:click|stopPropagation={() => { isYearOpen = !isYearOpen; isCategoryOpen = false; }}
              class="flex items-center gap-2.5 px-4 py-2 border border-white/60 bg-transparent text-white text-xs font-bold tracking-wider uppercase hover:bg-white/10 transition-colors focus:outline-none"
            >
              <span>{years.find(y => y.value === selectedYear)?.label || 'ALL YEARS'}</span>
              <span class="text-[10px] transform transition-transform duration-200 {isYearOpen ? 'rotate-180' : ''}">▼</span>
            </button>

            {#if isYearOpen}
              <div 
                class="absolute top-full left-0 mt-1 w-44 bg-white text-gray-900 shadow-xl border border-gray-100 z-50 py-1.5 animate-fadeIn"
                role="menu"
                tabindex="-1"
                on:click|stopPropagation
                on:keydown|stopPropagation
              >
                {#each years as y}
                  <button
                    type="button"
                    role="menuitem"
                    on:click={() => selectYear(y.value)}
                    class="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-[#3b7e57] hover:text-white transition-colors {selectedYear === y.value ? 'bg-emerald-50 text-[#3b7e57] font-bold' : ''}"
                  >
                    {y.label}
                  </button>
                {/each}
              </div>
            {/if}
          </div>

        </div>
      </div>
    </section>

    <!-- News Listing Section -->
    <section class="py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- News List (8 cards per page as in design) -->
        <div class="flex flex-col gap-8 sm:gap-10">
          {#each paginatedNews as item}
            <article class="grid grid-cols-1 md:grid-cols-12 bg-white/5 border border-white/10 overflow-hidden shadow-sm hover:border-white/30 transition-all duration-300 group">
              
              <!-- Left: Image / Media Placeholder -->
              <div class="md:col-span-5 bg-[#cce3d2] min-h-[220px] sm:min-h-[260px] flex items-center justify-center relative overflow-hidden">
                <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest group-hover:scale-105 transition-transform duration-300">
                  Featured Media
                </span>
              </div>

              <!-- Right: Content Column -->
              <div class="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#326d4a]/50 group-hover:bg-[#326d4a]/70 transition-colors">
                <div>
                  <!-- Meta Header: Category & Date -->
                  <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-white/90 mb-3">
                    <span class="font-extrabold text-white">{item.category}</span>
                    <span>{item.date}</span>
                  </div>

                  <!-- Title -->
                  <h2 class="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-emerald-100 transition-colors">
                    {item.title}
                  </h2>

                  <!-- Excerpt -->
                  <p class="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-6 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>

                <!-- Read More Action -->
                <div>
                  <button
                    type="button"
                    on:click={() => openArticle(item)}
                    class="btn-outline group/btn inline-flex items-center gap-2 text-xs font-bold tracking-wider"
                  >
                    <span class="text-[10px] transform group-hover/btn:translate-x-0.5 transition-transform">▸</span>
                    <span>READ MORE</span>
                  </button>
                </div>
              </div>

            </article>
          {/each}

          {#if paginatedNews.length === 0}
            <div class="text-center py-20 border border-white/10 bg-white/5 p-8">
              <p class="text-white/80 text-sm font-medium">No news found matching the selected filters.</p>
              <button
                type="button"
                on:click={() => { selectedCategory = 'ALL'; selectedYear = 'ALL'; }}
                class="mt-4 px-4 py-2 border border-white/60 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#3b7e57] transition-all"
              >
                Reset Filters
              </button>
            </div>
          {/if}
        </div>

        <!-- Pagination Controls (Matching bottom of Figma design) -->
        {#if totalPages > 1 || paginatedNews.length > 0}
          <div class="mt-14 pt-8 border-t border-white/20 flex items-center justify-between">
            
            <!-- Page Number Circles (1 2 3 4 5 ...) -->
            <div class="flex items-center gap-2">
              {#each Array(totalPages) as _, i}
                {@const pageNum = i + 1}
                <button
                  type="button"
                  on:click={() => goToPage(pageNum)}
                  class="w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-200 {currentPage === pageNum ? 'bg-white text-[#306947] shadow-md font-extrabold scale-105' : 'bg-transparent border border-white/40 text-white hover:bg-white/15'}"
                  aria-label={`Go to page ${pageNum}`}
                >
                  {pageNum}
                </button>
              {/each}
            </div>

            <!-- Arrow Navigation (< and >) -->
            <div class="flex items-center gap-2">
              <button
                type="button"
                on:click={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous Page"
                class="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center text-xs transition-all hover:bg-white hover:text-[#306947] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
              >
                &lt;
              </button>
              <button
                type="button"
                on:click={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next Page"
                class="w-8 h-8 rounded-full border border-white/40 text-white flex items-center justify-center text-xs transition-all hover:bg-white hover:text-[#306947] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white"
              >
                &gt;
              </button>
            </div>

          </div>
        {/if}

      </div>
    </section>

  </main>

  <!-- Interactive Article Modal -->
  {#if activeArticle}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div class="bg-white text-gray-900 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative">
        <button
          type="button"
          on:click={closeArticle}
          class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close Article"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#3b7e57] font-bold mb-3">
          <span>{activeArticle.category}</span>
          <span>•</span>
          <span>{activeArticle.date}</span>
          <span>•</span>
          <span>{activeArticle.readTime}</span>
        </div>

        <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
          {activeArticle.title}
        </h2>

        <p class="text-xs font-semibold text-gray-500 mb-6">
          By <span class="text-gray-800">{activeArticle.author}</span>
        </p>

        <div class="w-full aspect-[16/9] bg-[#cce3d2] rounded-lg mb-6 flex items-center justify-center">
          <span class="text-[#306947]/40 font-mono text-xs uppercase tracking-wider">
            Article Cover Image
          </span>
        </div>

        <div class="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
          <p>{activeArticle.excerpt}</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            on:click={closeArticle}
            class="px-6 py-2.5 bg-[#3b7e57] hover:bg-[#306847] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  {/if}

  <Footer />
</div>
