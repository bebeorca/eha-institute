<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  export let heroVideoSrc = '';

  // 1. Universitas dan Institut Riset (8 slots = 2 rows x 4 cols)
  const universityCollaborators = Array.from({ length: 8 }, (_, i) => ({
    id: `univ-${i + 1}`,
    name: `Universitas & Institut #${i + 1}`,
    logo: '' // blank, ready for image upload
  }));

  // 2. Industri dan Pemerintah (4 slots = 1 row x 4 cols)
  const industryCollaborators = Array.from({ length: 4 }, (_, i) => ({
    id: `ind-${i + 1}`,
    name: `Industri & Pemerintah #${i + 1}`,
    logo: '' // blank, ready for image upload
  }));

  // 3. Funder (8 slots = 2 rows x 4 cols)
  const funderCollaborators = Array.from({ length: 8 }, (_, i) => ({
    id: `funder-${i + 1}`,
    name: `Funder & Donor #${i + 1}`,
    logo: '' // blank, ready for image upload
  }));

  const sections = [
    {
      title: 'UNIVERSITAS DAN INSTITUT RISET',
      items: universityCollaborators
    },
    {
      title: 'INDUSTRI DAN PEMERINTAH',
      items: industryCollaborators
    },
    {
      title: 'FUNDER',
      items: funderCollaborators
    }
  ];

  let isContactModalOpen = false;
</script>

<div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
  <Navbar />

  <main class="flex-grow">
    
    <!-- Hero Section -->
    <section class="relative z-20 w-full pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-white/20">
      <!-- Background Layer (z-0 sits above page bg, strictly within its own overflow-hidden) -->
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
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-4">
            Collaborators
          </h1>
          <p class="text-sm sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </section>

    <!-- Collaborator Categorized Sections -->
    <div class="py-12 sm:py-16 space-y-16 sm:space-y-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {#each sections as sec, secIdx}
          <section class="{secIdx > 0 ? 'mt-14 sm:mt-18' : ''}">
          
            <h2 class="section-label">{sec.title}</h2>

            <!-- 4-Column Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {#each sec.items as item}
                <div
                  class="group relative bg-white rounded-lg p-5 sm:p-6 aspect-square flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-black/5"
                >
                  {#if item.logo}
                    <img
                      src={item.logo}
                      alt={item.name}
                      class="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  {:else}
                    <!-- Blank Card with placeholder ready for image upload -->
                    <div class="w-full h-full border border-dashed border-gray-200 rounded-md flex flex-col items-center justify-center p-3 text-center transition-colors group-hover:border-emerald-300/80 group-hover:bg-emerald-50/30">
                      <svg
                        class="w-7 h-7 sm:w-9 sm:h-9 text-gray-300 group-hover:text-[#3b7e57] transition-colors mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.4"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span class="text-[11px] font-mono tracking-wider text-gray-400 group-hover:text-[#3b7e57] font-medium uppercase transition-colors">
                        Logo Slot
                      </span>
                    </div>
                  {/if}
                </div>
              {/each}
            </div>

          </section>
        {/each}

      </div>
    </div>

    <!-- Call-To-Action Banner (Matching PDF: Tertarik berkolaborasi? & HUBUNGI KAMI) -->
    <section class="py-16 sm:py-24 text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
          Tertarik berkolaborasi?
        </h2>
        <div>
          <button
            type="button"
            on:click={() => isContactModalOpen = true}
            class="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 border border-white text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase hover:bg-white hover:text-[#3b7e57] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none"
          >
            HUBUNGI KAMI
          </button>
        </div>
      </div>
    </section>

  </main>

  <!-- Interactive Contact / Collaboration Modal -->
  {#if isContactModalOpen}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div class="bg-white text-gray-900 rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          type="button"
          on:click={() => isContactModalOpen = false}
          class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close Modal"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
          Kemitraan & Kolaborasi
        </h3>
        <p class="text-sm text-gray-600 mb-6 leading-relaxed">
          EHA Institute membuka kemitraan riset multidisiplin bersama universitas, industri, pemerintah, serta lembaga donor internasional.
        </p>

        <div class="space-y-4 mb-6 text-sm text-gray-700">
          <div class="p-3.5 bg-gray-50 rounded-lg border border-gray-100">
            <span class="block text-xs uppercase font-mono tracking-wider text-gray-500 font-bold mb-1">Email Kemitraan</span>
            <a href="mailto:collaboration@eha-institute.org" class="text-[#3b7e57] font-bold hover:underline">
              collaboration@eha-institute.org
            </a>
          </div>

          <div class="p-3.5 bg-gray-50 rounded-lg border border-gray-100">
            <span class="block text-xs uppercase font-mono tracking-wider text-gray-500 font-bold mb-1">Alamat Sekretariat</span>
            <p class="text-xs text-gray-600">
              Jl. Margonda Raya No.404, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424
            </p>
          </div>
        </div>

        <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            on:click={() => isContactModalOpen = false}
            class="px-5 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            Tutup
          </button>
          <a
            href="mailto:collaboration@eha-institute.org?subject=Inquiry%20Kemitraan%20Riset%20EHA%20Institute"
            class="px-6 py-2.5 bg-[#3b7e57] hover:bg-[#306847] text-white text-xs font-bold uppercase tracking-wider rounded text-center shadow transition-all hover:shadow-md"
          >
            Kirim Email
          </a>
        </div>
      </div>
    </div>
  {/if}

  <Footer />
</div>
