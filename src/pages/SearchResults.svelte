<script>
  import { onMount } from 'svelte';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import { searchDatabase, globalSearchQuery } from '../data/searchIndex.js';

  export let heroVideoSrc = '';

  let searchInput = '';
  let activeTab = 'ALL'; // 'ALL', 'Pages', 'Publications', 'News', 'Programs & Services', 'Leadership & Staff'

  $: results = searchDatabase(searchInput);

  // Sync with global store or URL hash parameter
  function parseHashQuery() {
    const hash = window.location.hash || '';
    const match = hash.match(/[?&]q=([^&]+)/);
    if (match) {
      const q = decodeURIComponent(match[1]);
      searchInput = q;
      globalSearchQuery.set(q);
    } else if ($globalSearchQuery) {
      searchInput = $globalSearchQuery;
    }
  }

  function handleSearchSubmit() {
    const q = searchInput.trim();
    globalSearchQuery.set(q);
    window.location.hash = `#search?q=${encodeURIComponent(q)}`;
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  }

  function setQuickKeyword(kw) {
    searchInput = kw;
    handleSearchSubmit();
  }

  onMount(() => {
    parseHashQuery();
    window.addEventListener('hashchange', parseHashQuery);
    return () => {
      window.removeEventListener('hashchange', parseHashQuery);
    };
  });
</script>

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
        <div class="max-w-4xl">
          <span class="text-xs uppercase tracking-widest font-mono text-emerald-200 font-bold block mb-2">
            PENCARIAN TERPADU • EHA INSTITUTE
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] mb-6">
            Hasil Pencarian
          </h1>

          <!-- Active Search Input Box inside Hero -->
          <div class="relative max-w-2xl flex items-center bg-white text-gray-900 rounded-none shadow-2xl p-1.5 focus-within:ring-2 focus-within:ring-emerald-400">
            <div class="pl-3.5 pr-2 text-gray-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              bind:value={searchInput}
              on:keydown={handleKeydown}
              placeholder="Cari riset, jurnal, berita, staf, atau program..."
              class="w-full py-2.5 px-2 text-sm font-medium text-gray-900 bg-transparent focus:outline-none placeholder-gray-400"
            />
            {#if searchInput}
              <button
                type="button"
                on:click={() => { searchInput = ''; handleSearchSubmit(); }}
                class="p-2 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Hapus kata kunci"
              >
                ✕
              </button>
            {/if}
            <button
              type="button"
              on:click={handleSearchSubmit}
              class="px-5 py-2.5 bg-[#3b7e57] hover:bg-[#306847] text-white text-xs font-bold uppercase tracking-wider rounded-none transition-colors shrink-0 shadow"
            >
              Cari
            </button>
          </div>

          <!-- Status Result text -->
          <div class="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/85">
            {#if results.query}
              <span>Menampilkan hasil untuk: <strong class="text-white font-bold underline decoration-emerald-300">"{results.query}"</strong></span>
              <span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>
              <span class="font-mono text-emerald-200 font-semibold">{results.totalCount} item ditemukan</span>
            {:else}
              <span>Ketik kata kunci untuk mulai mencari di seluruh repositori EHA Institute.</span>
            {/if}
          </div>
        </div>
      </div>
    </section>

    <!-- Content & Filter Section -->
    <section class="py-10 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Category Filter Tabs -->
        {#if results.totalCount > 0}
          <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/15 scrollbar-none">
            <button
              type="button"
              on:click={() => activeTab = 'ALL'}
              class="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all shrink-0 rounded-none {activeTab === 'ALL' ? 'bg-white text-[#306947] shadow-md font-extrabold' : 'border border-white/30 text-white/80 hover:bg-white/10 hover:text-white'}"
            >
              Semua Kategori ({results.totalCount})
            </button>

            {#each results.categories as cat}
              {#if results.groups[cat] && results.groups[cat].length > 0}
                <button
                  type="button"
                  on:click={() => activeTab = cat}
                  class="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all shrink-0 rounded-none {activeTab === cat ? 'bg-white text-[#306947] shadow-md font-extrabold' : 'border border-white/30 text-white/80 hover:bg-white/10 hover:text-white'}"
                >
                  {cat} ({results.groups[cat].length})
                </button>
              {/if}
            {/each}
          </div>
        {/if}

        <!-- Grouped Results View -->
        {#if results.totalCount > 0}
          <div class="space-y-14 sm:space-y-16">
            
            {#each results.categories as cat}
              {#if (activeTab === 'ALL' || activeTab === cat) && results.groups[cat]?.length > 0}
                <div class="animate-fadeIn">
                  <!-- Section Title (e.g. "Pages", "Publications", "News") -->
                  <div class="flex items-center justify-between pb-3 mb-6 border-b border-white/20">
                    <div class="flex items-center gap-2.5">
                      <span class="w-1.5 h-4 bg-emerald-300 inline-block"></span>
                      <h2 class="text-base sm:text-lg font-extrabold text-white tracking-wider uppercase">
                        {cat}
                      </h2>
                    </div>
                    <span class="text-xs font-mono text-emerald-200">
                      {results.groups[cat].length} hasil
                    </span>
                  </div>

                  <!-- Cards Grid / List for this section -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {#each results.groups[cat] as item}
                      <a
                        href={item.url}
                        class="group block p-6 bg-[#326d4a]/50 hover:bg-[#2c6141] border border-white/10 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                      >
                        <div class="flex items-center justify-between gap-3 mb-2.5">
                          <span class="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-black/25 text-emerald-200 border border-white/10">
                            {item.type}
                          </span>
                          <span class="text-xs text-white/60 group-hover:text-white transition-colors">
                            Buka ↗
                          </span>
                        </div>

                        <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-emerald-100 transition-colors leading-snug mb-2">
                          {item.title}
                        </h3>

                        <p class="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4 line-clamp-2">
                          {item.desc}
                        </p>

                        {#if item.meta}
                          <div class="pt-3 border-t border-white/10 text-[11px] font-mono text-white/60 truncate">
                            {item.meta}
                          </div>
                        {/if}
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            {/each}

          </div>
        {:else if searchInput.trim()}
          <!-- Empty State when nothing found -->
          <div class="py-16 sm:py-24 text-center max-w-xl mx-auto border border-white/15 bg-white/5 p-8 sm:p-12">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-white/60">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
              Tidak ada hasil ditemukan
            </h3>
            <p class="text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
              Tidak ditemukan konten yang cocok dengan kata kunci <strong class="text-white font-bold">"{searchInput}"</strong>. Coba periksa ejaan atau gunakan kata kunci umum lainnya.
            </p>

            <!-- Suggested Keyword Chips -->
            <div>
              <span class="text-[11px] uppercase tracking-wider font-mono text-emerald-200 font-bold block mb-3">
                Saran Kata Kunci Populer:
              </span>
              <div class="flex flex-wrap items-center justify-center gap-2">
                {#each ['Research', 'Health', 'Water', 'Environment', 'Webinar', 'Publications', 'Career', 'Training', 'Policy'] as kw}
                  <button
                    type="button"
                    on:click={() => setQuickKeyword(kw)}
                    class="px-3 py-1.5 text-xs bg-white/10 hover:bg-white hover:text-[#3b7e57] text-white border border-white/20 transition-all font-semibold rounded-none"
                  >
                    {kw}
                  </button>
                {/each}
              </div>
            </div>
          </div>
        {:else}
          <!-- Initial Search State -->
          <div class="py-16 text-center max-w-lg mx-auto">
            <p class="text-sm text-white/80 mb-6">
              Gunakan kotak pencarian di atas untuk menemukan informasi spesifik di seluruh portal EHA Institute.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-2">
              {#each ['Research', 'Water', 'Health', 'Publications', 'News', 'Internship'] as kw}
                <button
                  type="button"
                  on:click={() => setQuickKeyword(kw)}
                  class="px-3 py-1.5 text-xs bg-white/10 hover:bg-white hover:text-[#3b7e57] text-white border border-white/20 transition-all font-semibold"
                >
                  {kw}
                </button>
              {/each}
            </div>
          </div>
        {/if}

      </div>
    </section>

  </main>

  <Footer />
</div>

