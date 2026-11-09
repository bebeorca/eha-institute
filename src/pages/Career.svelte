<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  export let heroVideoSrc = '';

  const programs = [
    {
      id: 'internship-batch-1',
      title1: 'Internship',
      title2: 'Program',
      batch: '#BATCH1',
      period: 'Cohort 2026 • 3 Months',
      status: 'OPEN FOR APPLICATION',
      statusColor: 'bg-emerald-600',
      focus: 'Environmental & Public Health Research',
      desc: 'An intensive, project-driven internship program designed for undergraduate and graduate students eager to gain hands-on experience in environmental science, policy analysis, and advanced research methodologies.',
      requirements: [
        'Undergraduate or fresh graduate in Environmental Science, Public Health, Data Science, or related fields',
        'Strong research, analytical, and critical thinking skills',
        'Proficiency in scientific writing and academic communication',
        'Commitment to participate full-time or hybrid for 12 weeks'
      ],
      benefits: [
        'Direct mentorship from senior EHA research fellows',
        'Co-authorship opportunity on scientific publications & briefs',
        'Access to EHA Institute research labs and datasets',
        'Competitive monthly stipend and certificate of completion'
      ]
    },
    {
      id: 'internship-batch-2',
      title1: 'Internship',
      title2: 'Program',
      batch: '#BATCH2',
      period: 'Upcoming Cohort • Late 2026',
      status: 'REGISTRATION SOON',
      statusColor: 'bg-amber-600',
      focus: 'Advanced Technology & Health Informatics',
      desc: 'Focused on developing cutting-edge technology tools, sensor integrations, and predictive models for real-time environmental monitoring and public health defense.',
      requirements: [
        'Background in Computer Science, Software Engineering, GIS, or Statistics',
        'Experience with Python, R, IoT devices, or modern web frameworks',
        'Passion for applying technology to environmental & climate solutions'
      ],
      benefits: [
        'Hands-on engineering experience on production platforms',
        'Cross-disciplinary collaboration with environmental domain experts',
        'Mentorship and professional career development'
      ]
    },
    {
      id: 'research-fellow',
      title1: 'Research',
      title2: 'Fellowship',
      batch: '#FELLOW2026',
      period: 'Annual Program • 1 Year',
      status: 'ROLLING APPLICATIONS',
      statusColor: 'bg-emerald-700',
      focus: 'Independent Scientific Leadership',
      desc: 'Prestigious fellowship for postgraduates and early-career researchers to lead innovative studies in sustainable development, environmental epidemiology, and climate resilience.',
      requirements: [
        'Master’s degree or PhD in relevant scientific disciplines',
        'Track record of peer-reviewed publications',
        'Compelling research proposal aligned with EHA core priorities'
      ],
      benefits: [
        'Full project funding and research grant allocation',
        'Institutional backing for international conference presentations',
        'Collaborative network across leading global institutions'
      ]
    }
  ];

  let currentIndex = 0;
  let selectedProgram = null;
  let showModal = false;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % programs.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + programs.length) % programs.length;
  }

  function openApplyModal(prog) {
    selectedProgram = prog;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function handleKeydown(e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape') closeModal();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

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
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12]">
            Career at EHA
          </h1>
        </div>
      </div>
    </section>

    <!-- Main Showcase / Carousel Section -->
    <section class="py-14 sm:py-20 lg:py-28 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Center Carousel Container with Navigation Arrows -->
        <div class="relative flex items-center justify-center">
          
          <!-- Prev Button (Left Circular Arrow) -->
          <button
            type="button"
            on:click={prevSlide}
            aria-label="Previous Program"
            class="absolute left-2 sm:left-4 md:left-8 lg:left-16 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-gray-800 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-emerald-50 focus:outline-none"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Featured Showcase Card -->
          <div class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[3/4] sm:aspect-[4/5] bg-[#d2ded5] shadow-2xl relative overflow-hidden transition-all duration-500 flex flex-col justify-between group">
            
            <!-- Top Content: Stacked Bold Typography matching Figma design -->
            <div class="p-8 sm:p-12 md:p-14 z-10">
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight uppercase leading-[1.06] drop-shadow-sm select-none">
                {programs[currentIndex].title1}<br />
                {programs[currentIndex].title2}<br />
                <span class="text-white/95">{programs[currentIndex].batch}</span>
              </h2>

              <div class="mt-4 flex items-center gap-2">
                <span class="inline-block px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-white shadow-sm {programs[currentIndex].statusColor}">
                  {programs[currentIndex].status}
                </span>
                <span class="text-xs text-gray-700 font-semibold">
                  {programs[currentIndex].period}
                </span>
              </div>
            </div>

            <!-- Subtle Decorative Watermark Pattern inside Card -->
            <div class="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#306947_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <!-- Bottom Action & Details Overlay -->
            <div class="p-8 sm:p-10 md:p-12 bg-gradient-to-t from-[#204a31] via-[#204a31]/80 to-transparent z-10 text-white">
              <p class="text-xs sm:text-sm text-white/90 line-clamp-2 mb-4 leading-relaxed font-normal">
                {programs[currentIndex].desc}
              </p>

              <div class="flex items-center justify-between gap-4">
                <span class="text-xs uppercase font-mono tracking-wider text-emerald-200 font-bold truncate">
                  {programs[currentIndex].focus}
                </span>
                
                <button
                  type="button"
                  on:click={() => openApplyModal(programs[currentIndex])}
                  class="shrink-0 px-5 py-2.5 bg-white text-[#204a31] hover:bg-[#cce3d2] text-xs font-extrabold uppercase tracking-wider rounded transition-all duration-200 shadow hover:shadow-lg hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </div>

          </div>

          <!-- Next Button (Right Circular Arrow) -->
          <button
            type="button"
            on:click={nextSlide}
            aria-label="Next Program"
            class="absolute right-2 sm:right-4 md:right-8 lg:right-16 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white text-gray-800 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-emerald-50 focus:outline-none"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        <!-- Slide Indicators & Counter -->
        <div class="mt-8 flex flex-col items-center justify-center gap-3">
          <div class="flex items-center gap-2">
            {#each programs as _, idx}
              <button
                type="button"
                on:click={() => currentIndex = idx}
                aria-label={`Go to slide ${idx + 1}`}
                class="w-3 h-3 rounded-full transition-all duration-300 {currentIndex === idx ? 'w-8 bg-white' : 'bg-white/40 hover:bg-white/70'}"
              ></button>
            {/each}
          </div>
          <span class="text-xs font-mono tracking-widest text-white/70 uppercase">
            0{currentIndex + 1} / 0{programs.length}
          </span>
        </div>

      </div>
    </section>

  </main>

  <!-- Interactive Application Modal -->
  {#if showModal && selectedProgram}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div class="bg-white text-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        <!-- Close Button -->
        <button
          type="button"
          on:click={closeModal}
          class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close Modal"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Program Header -->
        <div class="border-b border-gray-100 pb-4 mb-6">
          <span class="text-xs font-mono uppercase tracking-widest text-[#3b7e57] font-bold">
            {selectedProgram.status}
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            {selectedProgram.title1} {selectedProgram.title2} <span class="text-[#3b7e57]">{selectedProgram.batch}</span>
          </h3>
          <p class="text-sm text-gray-600 mt-1 font-medium">
            {selectedProgram.focus} • {selectedProgram.period}
          </p>
        </div>

        <!-- Description -->
        <div class="mb-6">
          <h4 class="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2 font-mono">Overview</h4>
          <p class="text-sm text-gray-700 leading-relaxed">
            {selectedProgram.desc}
          </p>
        </div>

        <!-- Requirements -->
        <div class="mb-6">
          <h4 class="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2 font-mono">Key Requirements</h4>
          <ul class="space-y-2">
            {#each selectedProgram.requirements as req}
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-[#3b7e57] font-bold mt-0.5">✓</span>
                <span>{req}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Benefits -->
        <div class="mb-8">
          <h4 class="text-xs uppercase tracking-wider font-bold text-gray-500 mb-2 font-mono">What We Offer</h4>
          <ul class="space-y-2">
            {#each selectedProgram.benefits as ben}
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-[#3b7e57] font-bold mt-0.5">★</span>
                <span>{ben}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Footer Actions -->
        <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            on:click={closeModal}
            class="w-full sm:w-auto px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            Close
          </button>
          <a
            href="mailto:career@eha-institute.org?subject=Application%20for%20{encodeURIComponent(selectedProgram.title1 + ' ' + selectedProgram.title2 + ' ' + selectedProgram.batch)}"
            class="w-full sm:w-auto px-6 py-2.5 bg-[#3b7e57] hover:bg-[#306847] text-white text-xs font-bold uppercase tracking-wider rounded text-center shadow transition-all hover:shadow-md"
          >
            Submit Application via Email
          </a>
        </div>
      </div>
    </div>
  {/if}

  <Footer />
</div>

