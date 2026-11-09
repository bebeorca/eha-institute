<script>
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

  export let heroVideoSrc = '';

  const sustainValues = [
    {
      letter: 'S',
      title: 'Science',
      desc: 'We are committed to evidence-based research and scientific integrity in all our work.'
    },
    {
      letter: 'U',
      title: 'Unity',
      desc: 'We foster interdisciplinary and cross-sector partnerships to co-create impactful solutions.'
    },
    {
      letter: 'S',
      title: 'Sustainable',
      desc: 'We prioritize long-term environmental and public health outcomes in everything we do.'
    },
    {
      letter: 'T',
      title: 'Technology',
      desc: 'We embrace and develop advanced technologies to address complex challenges.'
    },
    {
      letter: 'A',
      title: 'Accessibility',
      desc: 'We ensure our knowledge, tools, and programs are inclusive and open.'
    },
    {
      letter: 'I',
      title: 'Integrity',
      desc: 'We uphold transparency, ethical conduct, and accountability across every initiative.'
    },
    {
      letter: 'N',
      title: 'Nurture',
      desc: 'We support the growth of knowledge, people, and communities.'
    }
  ];
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
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] mb-3">
            Who We Are
          </h1>
          <p class="text-sm sm:text-base font-semibold tracking-wider uppercase text-white/80">
            Mission, Vision, & Values
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 1: Mission -->
    <section class="py-14 sm:py-20 border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Left: Media Placeholder -->
          <div class="lg:col-span-5">
            <div class="w-full aspect-[4/3] bg-[#cce3d2] shadow-sm flex items-center justify-center relative overflow-hidden">
              <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest">
                Mission Media
              </span>
            </div>
          </div>

          <!-- Right: Mission Content -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-6">
              Mission
            </h2>
            <p class="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              <span class="font-bold text-white">EHA</span>, which stands for <strong class="text-emerald-200">Environment, Health, and Advanced Technology Institute</strong>, is an independent research organization committed to advancing science and technology in the fields of environmental and public health. The institute addresses pressing environmental and health challenges through a multidisciplinary approach and fosters innovation through evidence-based research. EHA Institute integrates scientific research, technological development, and community empowerment to develop sustainable, impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Vision -->
    <section class="py-14 sm:py-20 border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Left: Vision Content -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-6">
              Vision
            </h2>
            <p class="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              As fundamental changes reshape our way of life and environment, the need for sustainable living has become more urgent than ever. EHA Institute was established to respond to this need by developing innovative solutions in the fields of environment, health, and advanced technology, contributing to a healthier and more sustainable future.
            </p>
          </div>

          <!-- Right: Media Placeholder -->
          <div class="lg:col-span-5">
            <div class="w-full aspect-[4/3] bg-[#cce3d2] shadow-sm flex items-center justify-center relative overflow-hidden">
              <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest">
                Vision Media
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- SECTION 3: Core Value of S U S T A I N                   -->
    <!-- Polished, responsive 7-pillar system matching brand aesthetic -->
    <!-- ======================================================== -->
    <section class="py-16 sm:py-24 border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Title with Letter Spacing -->
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-[0.25em] uppercase">
            Core Value of S U S T A I N
          </h2>
          <div class="w-20 h-1 bg-white/40 mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- 7-Pillar Grid (Desktop 7 cols, Tablet 3-4 cols, Mobile 1-2 cols) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3">
          {#each sustainValues as v}
            <div
              class="group relative bg-[#2a603f] border border-white/15 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:bg-[#235336] hover:border-emerald-300/60 hover:shadow-2xl"
            >
              <!-- Organic Wave Header (Matches Figma Design Motif) -->
              <div class="relative w-full h-20 bg-[#224e33] flex items-center justify-center overflow-hidden">
                <!-- Layered Wave SVG -->
                <svg
                  viewBox="0 0 120 40"
                  preserveAspectRatio="none"
                  class="absolute inset-0 w-full h-full pointer-events-none opacity-30 transition-transform duration-500 group-hover:scale-105"
                >
                  <path d="M0,16 C30,6 60,28 90,14 C105,8 115,16 120,18 L120,40 L0,40 Z" fill="#ffffff" />
                  <path d="M0,10 C30,0 60,22 90,8 C105,2 115,10 120,12" stroke="#ffffff" stroke-width="1.5" fill="none" />
                  <path d="M0,22 C30,12 60,34 90,20 C105,14 115,22 120,24" stroke="#ffffff" stroke-width="1" fill="none" opacity="0.6" />
                </svg>

                <!-- Top Letter Circle Badge -->
                <div class="relative z-10 w-12 h-12 rounded-full bg-white text-[#2a603f] font-black text-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#cce3d2] transition-transform duration-300">
                  {v.letter}
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-4 sm:p-5 flex flex-col items-center text-center flex-grow">
                <!-- Value Title -->
                <h3 class="text-base font-bold text-white tracking-wide">
                  {v.title}
                </h3>

                <!-- Accent Bar (Matches Wine/Coral accent from Mockup) -->
                <div class="w-8 h-[2.5px] bg-[#a25367] rounded-full my-3 group-hover:w-12 group-hover:bg-emerald-300 transition-all duration-300"></div>

                <!-- Description -->
                <p class="text-xs sm:text-[13px] text-white/85 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>
            </div>
          {/each}
        </div>

      </div>
    </section>

    <!-- SECTION 4: Our Team -->
    <section class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Left: Team Media Placeholder -->
          <div class="lg:col-span-5">
            <div class="w-full aspect-[4/3] bg-[#cce3d2] shadow-sm flex items-center justify-center relative overflow-hidden">
              <span class="text-[#306947]/30 font-mono text-xs uppercase tracking-widest">
                Our Team Media
              </span>
            </div>
          </div>

          <!-- Right: Team Narrative & Join Button -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-6">
              Our Team
            </h2>
            <p class="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-5">
              Behind every initiative at EHA Institute is a multidisciplinary team of researchers, academics, technology practitioners, environmental advocates, and community facilitators united by a shared passion for driving sustainable change.
            </p>
            <p class="text-sm sm:text-base text-white/90 leading-relaxed font-normal mb-8">
              We believe that cross-disciplinary collaboration is essential to crafting innovative solutions for today’s global challenges. With diverse backgrounds in environmental science, renewable energy, digital technology, and community empowerment, our team works in synergy to design impactful, data-driven, and future-oriented programs.
            </p>

            <div>
              <a href="#careers" class="btn-outline group">
                <span class="text-[10px] transform group-hover:translate-x-0.5 transition-transform">▸</span>
                <span>JOIN US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <Footer />
</div>
