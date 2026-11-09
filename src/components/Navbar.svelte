<script>
  let activeMenu = null; // 'work' | 'people' | 'news' | 'about' | null
  let isNavbarHovered = false;
  let leaveTimeout = null;
  let mobileMenuOpen = false;
  let mobileExpandedMenu = null; // 'work' | 'people' | 'about' | null
  let isSearchOpen = false;

  $: isWhiteMode = Boolean(isNavbarHovered || activeMenu || isSearchOpen || mobileMenuOpen);

  const megaMenus = {
    work: {
      title: 'Our Work',
      description: 'EHAinstitute creates and globally Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      columns: [
        {
          header: 'RESEARCH & INNOVATION',
          items: [
            { label: 'Main Research Areas', href: '#research-areas', desc: '' },
            { label: 'Consultation Services', href: '#consultation', desc: '' },
            { label: 'Scientific Writing', href: '#scientific-writing', desc: '' }
          ]
        },
        {
          header: 'EDUCATION & LITERACY',
          items: [
            { label: 'Webinar Series', href: '#webinars', desc: '' },
            { label: 'Podcast', href: '#podcast', desc: '' },
            { label: 'Training', href: '#training', desc: '' },
            { label: 'Conference Meeting', href: '#conference', desc: '' }
          ]
        }
      ]
    },
    about: {
      title: 'About',
      description: 'EHAinstitute staff are driven by a curiosity to learn more about Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      columns: [
        {
          header: '',
          items: [
            {
              label: 'Who We Are',
              desc: 'Learn about our vision, mission, and institutional foundation.',
              href: '#who-we-are'
            }
          ]
        },
        {
          header: '',
          items: [
            {
              label: 'Leadership & Staff',
              desc: 'Meet our staff, leadership, and board of directors.',
              href: '#leadership'
            }
          ]
        },
        {
          header: '',
          items: [
            {
              label: 'Career',
              desc: 'Explore career opportunities and join our interdisciplinary team.',
              href: '#careers'
            }
          ]
        }
      ]
    }
  };

  function handleNavbarMouseEnter() {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      leaveTimeout = null;
    }
    isNavbarHovered = true;
  }

  function handleMenuMouseEnter(menuKey) {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      leaveTimeout = null;
    }
    isNavbarHovered = true;
    activeMenu = menuKey;
  }

  function handleNavbarMouseLeave() {
    leaveTimeout = setTimeout(() => {
      isNavbarHovered = false;
      activeMenu = null;
    }, 150);
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (!mobileMenuOpen) {
      mobileExpandedMenu = null;
    }
  }

  function toggleMobileSubmenu(menuKey) {
    mobileExpandedMenu = mobileExpandedMenu === menuKey ? null : menuKey;
  }
</script>

<!-- Header & Mega Menu Container -->
<!-- Transparent with white text by default; smoothly transitions to white with dark text when hovered or when mobile menu is open -->
<header 
  class="w-full relative z-50 transition-colors duration-300 {isWhiteMode ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white border-b border-white/10'}"
>
  <div 
    class="w-full"
    role="region"
    aria-label="Navigation Area"
    on:mouseenter={handleNavbarMouseEnter}
    on:mouseleave={handleNavbarMouseLeave}
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Utility Row: Publications & Collaborators -->
      <div class="flex justify-end items-center py-2.5 text-xs transition-colors duration-300 {isWhiteMode ? 'text-gray-500 border-b border-gray-100' : 'text-white/80 border-b border-white/10'} gap-8">
        <a href="#publications" class="{isWhiteMode ? 'hover:text-gray-900' : 'hover:text-white'} transition-colors">Publications</a>
        <a href="#collaborators" class="{isWhiteMode ? 'hover:text-gray-900' : 'hover:text-white'} transition-colors">Collaborators</a>
      </div>

      <!-- Main Navigation Bar -->
      <div class="flex items-center justify-between py-3">
        
        <!-- Logo: White block with green text at rest; Black block with white text on hover -->
        <a href="/" class="flex items-center group">
          <div class="w-32 sm:w-40 h-12 sm:h-14 flex items-center justify-center px-3 shadow-sm transition-all duration-300 group-hover:scale-[1.02] {isWhiteMode ? 'bg-black text-white' : 'bg-white text-[#3b7e57]'}">
            <span class="font-extrabold text-xs sm:text-sm tracking-wider uppercase font-sans">
              EHA <span class="font-normal text-[11px] sm:text-xs">INSTITUTE</span>
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Items -->
        <nav class="hidden md:flex items-center gap-7 lg:gap-10 text-base lg:text-[17px] font-bold tracking-tight">
          
          <!-- 1. Our Work -->
          <div 
            class="relative py-3 cursor-pointer group/nav"
            role="button"
            tabindex="0"
            on:mouseenter={() => handleMenuMouseEnter('work')}
            on:focus={() => handleMenuMouseEnter('work')}
          >
            <a 
              href="#work" 
              class="flex items-center gap-1.5 transition-colors {isWhiteMode ? (activeMenu === 'work' ? 'text-black' : 'text-gray-900 hover:text-black') : 'text-white hover:text-white/80'}"
            >
              <span>Our Work</span>
              <!-- Down Caret Icon -->
              <svg class="w-3.5 h-3.5 fill-current transition-all duration-200 {isWhiteMode ? 'text-gray-800' : 'text-white'} {activeMenu === 'work' ? 'rotate-180' : ''}" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </a>
            <!-- Green Underline Hover Indicator with smooth fade-in from left to right -->
            <span class="absolute bottom-0 left-0 h-[3px] bg-[#3b7e57] rounded-full transition-all duration-300 ease-out {activeMenu === 'work' ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}"></span>
          </div>

          <!-- 2. News (Direct link, indicator on hover) -->
          <div 
            class="relative py-3 cursor-pointer group/nav"
            role="button"
            tabindex="0"
            on:mouseenter={() => handleMenuMouseEnter('news')}
            on:focus={() => handleMenuMouseEnter('news')}
          >
            <a 
              href="#news" 
              class="block transition-colors {isWhiteMode ? (activeMenu === 'news' ? 'text-black' : 'text-gray-900 hover:text-black') : 'text-white hover:text-white/80'}"
            >
              News
            </a>
            <span class="absolute bottom-0 left-0 h-[3px] bg-[#3b7e57] rounded-full transition-all duration-300 ease-out {activeMenu === 'news' ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}"></span>
          </div>

          <!-- 4. About -->
          <div 
            class="relative py-3 cursor-pointer group/nav"
            role="button"
            tabindex="0"
            on:mouseenter={() => handleMenuMouseEnter('about')}
            on:focus={() => handleMenuMouseEnter('about')}
          >
            <a 
              href="#about" 
              class="flex items-center gap-1.5 transition-colors {isWhiteMode ? (activeMenu === 'about' ? 'text-black' : 'text-gray-900 hover:text-black') : 'text-white hover:text-white/80'}"
            >
              <span>About</span>
              <svg class="w-3.5 h-3.5 fill-current transition-all duration-200 {isWhiteMode ? 'text-gray-800' : 'text-white'} {activeMenu === 'about' ? 'rotate-180' : ''}" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </a>
            <span class="absolute bottom-0 left-0 h-[3px] bg-[#3b7e57] rounded-full transition-all duration-300 ease-out {activeMenu === 'about' ? 'w-full opacity-100' : 'w-0 opacity-0 pointer-events-none'}"></span>
          </div>

          <!-- 5. Search Icon -->
          <button 
            type="button"
            on:click={() => isSearchOpen = !isSearchOpen}
            aria-label="Search" 
            class="p-2 rounded-full transition-colors ml-2 focus:outline-none {isWhiteMode ? 'text-gray-900 hover:text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

        </nav>

        <!-- Mobile Controls: Search Button & Hamburger Menu -->
        <div class="flex md:hidden items-center gap-1">
          <!-- Mobile Search Button -->
          <button 
            type="button"
            on:click={() => isSearchOpen = !isSearchOpen}
            aria-label="Search" 
            class="p-2 rounded-full focus:outline-none transition-colors {isWhiteMode ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- Mobile Hamburger Menu Button -->
          <button 
            type="button" 
            on:click={toggleMobileMenu} 
            class="p-2 rounded focus:outline-none transition-colors {isWhiteMode ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}"
            aria-label="Toggle Navigation"
          >
            {#if mobileMenuOpen}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            {:else}
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            {/if}
          </button>
        </div>

      </div>

      <!-- Quick Search Bar Toggle -->
      {#if isSearchOpen}
        <div class="py-3 border-t {isWhiteMode ? 'border-gray-100' : 'border-white/20'} flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search research, people, publications..."
            class="w-full rounded px-4 py-2 text-sm focus:outline-none {isWhiteMode ? 'bg-gray-50 border border-gray-200 text-gray-900 focus:border-[#3b7e57]' : 'bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-white'}"
          />
          <button 
            type="button"
            on:click={() => isSearchOpen = false} 
            class="text-xs uppercase font-bold px-2 {isWhiteMode ? 'text-gray-500 hover:text-gray-900' : 'text-white/80 hover:text-white'}"
          >
            Cancel
          </button>
        </div>
      {/if}

    </div>

    <!-- ======================================================== -->
    <!-- DESKTOP FULL-WIDTH MEGA MENU DRAWER (Pure White)         -->
    <!-- Floating absolute overlay                                -->
    <!-- ======================================================== -->
    {#if activeMenu && megaMenus[activeMenu]}
      {@const currentMega = megaMenus[activeMenu]}
      <div 
        class="hidden md:block absolute top-full left-0 w-full bg-white text-gray-900 border-t border-gray-100 shadow-2xl py-12 lg:py-16 transition-all duration-300 animate-fadeIn z-50"
        role="region"
        aria-label="{currentMega.title} submenu"
        on:mouseenter={() => handleMenuMouseEnter(activeMenu)}
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <!-- Left Column: Big Title & Descriptive Green Paragraph -->
            <div class="lg:col-span-4 pr-0 lg:pr-6">
              <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 tracking-tight leading-none mb-5">
                {currentMega.title}
              </h2>
              <p class="text-sm sm:text-base text-[#3b7e57] font-medium leading-relaxed">
                {currentMega.description}
              </p>
            </div>

            <!-- Right Column: 3 Columns Grid for Content Links -->
            <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {#each currentMega.columns as column}
                <div class="flex flex-col gap-5">
                  
                  <!-- Category Subheader (if present, e.g. RESEARCH & INNOVATION) -->
                  {#if column.header}
                    <span class="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {column.header}
                    </span>
                  {/if}

                  <!-- Column Items -->
                  <div class="flex flex-col gap-6">
                    {#each column.items as item}
                      <a 
                        href={item.href} 
                        class="group block transition-transform duration-200 hover:translate-x-1"
                      >
                        <div class="inline-block relative">
                          <h4 class="text-sm sm:text-[15px] font-bold text-gray-900 group-hover:text-[#3b7e57] transition-colors leading-snug">
                            {item.label}
                          </h4>
                          <!-- Underline smooth fade-in from left to right -->
                          <span class="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#3b7e57] transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100 origin-left"></span>
                        </div>
                        {#if item.desc}
                          <p class="text-xs text-gray-500 font-normal leading-relaxed mt-1 group-hover:text-gray-700 transition-colors">
                            {item.desc}
                          </p>
                        {/if}
                      </a>
                    {/each}
                  </div>

                </div>
              {/each}
            </div>

          </div>
        </div>
      </div>
    {/if}

    <!-- ======================================================== -->
    <!-- MOBILE ACCORDION DRAWER MENU                             -->
    <!-- Displays all megaMenus items cleanly with accordions     -->
    <!-- ======================================================== -->
    {#if mobileMenuOpen}
      <div 
        class="md:hidden absolute top-full left-0 w-full bg-white text-gray-900 border-t border-gray-100 shadow-2xl py-4 px-4 flex flex-col gap-1 text-sm z-50 max-h-[calc(100vh-80px)] overflow-y-auto animate-fadeIn"
      >
        <!-- 1. Our Work Accordion -->
        <div class="border-b border-gray-100 py-1">
          <button
            type="button"
            on:click={() => toggleMobileSubmenu('work')}
            class="w-full flex items-center justify-between py-2.5 font-bold text-base text-gray-900 focus:outline-none"
          >
            <span>Our Work</span>
            <svg 
              class="w-4 h-4 text-gray-500 transition-transform duration-200 {mobileExpandedMenu === 'work' ? 'rotate-180 text-[#3b7e57]' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {#if mobileExpandedMenu === 'work'}
            <div class="pl-2 pr-1 py-3 bg-gray-50/80 rounded-lg flex flex-col gap-4 text-xs animate-fadeIn my-1">
              <p class="text-[#3b7e57] font-medium leading-relaxed text-[11px] border-l-2 border-[#3b7e57] pl-2.5">
                {megaMenus.work.description}
              </p>
              
              {#each megaMenus.work.columns as col}
                <div class="flex flex-col gap-2 pt-1 border-t border-gray-200/60 first:border-t-0 first:pt-0">
                  {#if col.header}
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                      {col.header}
                    </span>
                  {/if}
                  {#each col.items as item}
                    <a 
                      href={item.href} 
                      on:click={() => mobileMenuOpen = false}
                      class="py-1 font-semibold text-gray-800 hover:text-[#3b7e57] flex items-center gap-2 transition-colors group"
                    >
                      <span class="text-[#3b7e57] text-[10px] transform group-hover:translate-x-0.5 transition-transform">▸</span>
                      <span>{item.label}</span>
                    </a>
                  {/each}
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <!-- 2. News (Direct Link) -->
        <div class="border-b border-gray-100 py-1">
          <a 
            href="#news" 
            on:click={() => mobileMenuOpen = false}
            class="block py-2.5 font-bold text-base text-gray-900 hover:text-[#3b7e57] transition-colors"
          >
            News
          </a>
        </div>

        <!-- 4. About Accordion -->
        <div class="border-b border-gray-100 py-1">
          <button
            type="button"
            on:click={() => toggleMobileSubmenu('about')}
            class="w-full flex items-center justify-between py-2.5 font-bold text-base text-gray-900 focus:outline-none"
          >
            <span>About</span>
            <svg 
              class="w-4 h-4 text-gray-500 transition-transform duration-200 {mobileExpandedMenu === 'about' ? 'rotate-180 text-[#3b7e57]' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {#if mobileExpandedMenu === 'about'}
            <div class="pl-2 pr-1 py-3 bg-gray-50/80 rounded-lg flex flex-col gap-3 text-xs animate-fadeIn my-1">
              <p class="text-[#3b7e57] font-medium leading-relaxed text-[11px] border-l-2 border-[#3b7e57] pl-2.5">
                {megaMenus.about.description}
              </p>
              
              <div class="flex flex-col gap-3 pt-1">
                {#each megaMenus.about.columns as col}
                  {#each col.items as item}
                    <a 
                      href={item.href} 
                      on:click={() => mobileMenuOpen = false}
                      class="py-1 flex flex-col gap-0.5 group"
                    >
                      <div class="font-semibold text-gray-800 group-hover:text-[#3b7e57] flex items-center gap-2 transition-colors">
                        <span class="text-[#3b7e57] text-[10px] transform group-hover:translate-x-0.5 transition-transform">▸</span>
                        <span>{item.label}</span>
                      </div>
                      {#if item.desc}
                        <span class="text-[11px] text-gray-500 pl-4 leading-normal">{item.desc}</span>
                      {/if}
                    </a>
                  {/each}
                {/each}
              </div>
            </div>
          {/if}
        </div>

        <!-- Utilities at bottom of drawer -->
        <div class="pt-4 pb-2 flex items-center justify-between text-xs text-gray-500">
          <div class="flex gap-6">
            <a href="#publications" on:click={() => mobileMenuOpen = false} class="hover:text-gray-900 font-medium">Publications</a>
            <a href="#collaborators" on:click={() => mobileMenuOpen = false} class="hover:text-gray-900 font-medium">Collaborators</a>
          </div>
          <span class="text-[10px] text-gray-400 font-mono font-bold">EHA INSTITUTE</span>
        </div>
      </div>
    {/if}
  </div>
</header>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
