<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import { departments, leaders, staffList } from '../data/staffData.js';

  export let heroImageSrc = '';

  let selectedDepartment = 'ALL DEPARTMENTS';
  let isDepartmentOpen = false;

  function toggleDepartmentDropdown() {
    isDepartmentOpen = !isDepartmentOpen;
  }

  function selectDepartment(dept) {
    selectedDepartment = dept;
    isDepartmentOpen = false;
  }

  $: filteredStaff = selectedDepartment === 'ALL DEPARTMENTS'
    ? staffList
    : staffList.filter(item => item.dept === selectedDepartment);
</script>

<div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
  <Navbar />

  <main class="flex-grow">
    
    <!-- Hero Section -->
    <section class="relative w-full pt-16 pb-16 sm:pt-20 sm:pb-24 border-b border-white/20 overflow-hidden">
      <div class="absolute inset-0 w-full h-full z-0 bg-[#306947] overflow-hidden">
        {#if heroImageSrc}
          <img src={heroImageSrc} alt="Leadership & Staff" class="w-full h-full object-cover object-center scale-105" />
        {:else}
          <!-- Repeating 'IMAGE' watermark pattern matching Figma frame -->
          <div class="w-full h-full bg-[#35724f] relative flex items-center justify-center">
            <div class="absolute inset-0 opacity-15 bg-[radial-gradient(#cce3d2_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-15 overflow-hidden">
              <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mb-4">IMAGE</div>
              <div class="flex gap-12 text-6xl sm:text-8xl font-black text-white tracking-[0.25em]">
                <span>IMAGE</span><span>IMAGE</span>
              </div>
              <div class="text-7xl sm:text-9xl font-black text-white tracking-[0.25em] mt-4">IMAGE</div>
            </div>
          </div>
        {/if}
        <div class="absolute inset-0 bg-gradient-to-b from-[#3b7e57]/95 via-[#3b7e57]/85 to-[#3b7e57] mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-black/15"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12]">
            Leadership & Staff
          </h1>
        </div>
      </div>
    </section>

    <!-- SECTION 1: Leadership -->
    <section class="pt-12 pb-14 border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-label">Leadership</h2>

        <!-- 3-Column Grid for Leadership (6 cards: 2 rows of 3) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {#each leaders as leader}
            <article class="group relative aspect-[4/3] bg-[#cce3d2] overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {#if leader.image}
                <img src={leader.image} alt={leader.name} class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              {:else}
                <div class="w-full h-full bg-[#cce3d2] flex items-center justify-center relative">
                  <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest group-hover:text-[#306947]/50 transition-colors">
                    Leader #{leader.id}
                  </span>
                </div>
              {/if}
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
                <h3 class="text-2xl sm:text-[26px] font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  {leader.name}
                </h3>
                {#if leader.role}
                  <span class="text-[11px] text-white/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {leader.role} →
                  </span>
                {/if}
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>

    <!-- SECTION 2: Staff -->
    <section class="pt-12 pb-24 sm:pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-label">Staff</h2>

        <!-- Filter Dropdown: ALL DEPARTMENTS ▾ -->
        <div class="mb-10 relative inline-block z-20">
          <button
            type="button"
            on:click={toggleDepartmentDropdown}
            class="inline-flex items-center gap-3 px-4 py-2 border border-white text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#3b7e57] transition-all rounded-none focus:outline-none"
            aria-expanded={isDepartmentOpen}
          >
            <span>{selectedDepartment}</span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 {isDepartmentOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {#if isDepartmentOpen}
            <div class="absolute left-0 mt-2 w-72 bg-[#2d6445] border border-white/20 shadow-2xl py-2 rounded-none z-30 animate-fadeIn">
              {#each departments as dept}
                <button
                  type="button"
                  on:click={() => selectDepartment(dept)}
                  class="w-full text-left px-4 py-2.5 text-xs text-white hover:bg-white/15 transition-colors flex items-center justify-between {selectedDepartment === dept ? 'font-bold bg-white/10' : 'font-normal'}"
                >
                  <span>{dept}</span>
                  {#if selectedDepartment === dept}
                    <span class="text-xs text-emerald-300">✓</span>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <!-- 3-Column Grid for Staff (18 cards: 6 rows of 3) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {#each filteredStaff as staff}
            <article class="group relative aspect-[4/3] bg-[#cce3d2] overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {#if staff.image}
                <img src={staff.image} alt={staff.name} class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              {:else}
                <div class="w-full h-full bg-[#cce3d2] flex items-center justify-center relative">
                  <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest group-hover:text-[#306947]/50 transition-colors">
                    Staff #{staff.id}
                  </span>
                </div>
              {/if}
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
                <h3 class="text-2xl sm:text-[26px] font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                  {staff.name}
                </h3>
                {#if staff.role}
                  <span class="text-[11px] text-white/80 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {staff.role} • {staff.dept} →
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

