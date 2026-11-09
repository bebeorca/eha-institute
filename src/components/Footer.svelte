<script>
  let email = '';
  let submitted = false;

  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) {
      submitted = true;
      setTimeout(() => {
        submitted = false;
        email = '';
      }, 4000);
    }
  }
</script>

<footer class="w-full bg-[#353736] text-white pt-16 pb-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
      
      <!-- Left Column: Newsletter Subscription (6 cols) -->
      <div class="md:col-span-6 flex flex-col">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Stay Connected
        </h3>
        <p class="text-xs sm:text-sm text-[#9fa3a0] mb-8 font-normal">
          Recieve the latest EHA Insitute News
        </p>

        <!-- Newsletter Form -->
        <form on:submit={handleSubscribe} class="w-full max-w-md">
          <div class="relative flex items-center border-b border-white/60 focus-within:border-white transition-colors pb-2">
            <input 
              type="email" 
              bind:value={email}
              placeholder="YOUR EMAIL ADDRESS" 
              required
              class="w-full bg-transparent text-xs tracking-widest uppercase text-white placeholder-[#9fa3a0] focus:outline-none pr-8 font-medium"
            />
            <button 
              type="submit" 
              aria-label="Submit email address"
              class="text-white hover:text-white/80 p-1 transition-transform hover:translate-x-1 focus:outline-none"
            >
              <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {#if submitted}
            <span class="text-[11px] text-green-300 mt-2 block font-medium">
              Thank you for subscribing!
            </span>
          {/if}
        </form>
      </div>

      <!-- Right Column: Social Media & Address (6 cols) -->
      <div class="md:col-span-6 flex flex-col md:items-end justify-between min-h-[160px]">
        
        <!-- Social Icons Row -->
        <div class="flex items-center gap-3 mb-8">
          
          <!-- Instagram -->
          <a 
            href="#instagram" 
            aria-label="Instagram"
            class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#353736] transition-all"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke-width="2" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2.5" />
            </svg>
          </a>

          <!-- YouTube / Camera -->
          <a 
            href="#youtube" 
            aria-label="YouTube"
            class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#353736] transition-all"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <!-- Facebook -->
          <a 
            href="#facebook" 
            aria-label="Facebook"
            class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#353736] transition-all"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a 
            href="#linkedin" 
            aria-label="LinkedIn"
            class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#353736] transition-all"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          <!-- X (Twitter) -->
          <a 
            href="#twitter" 
            aria-label="X (formerly Twitter)"
            class="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-[#353736] transition-all"
          >
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

        </div>

        <!-- Physical Address -->
        <address class="not-italic text-xs text-[#a0a5a2] text-left md:text-right leading-relaxed font-normal">
          Jl. Margonda Raya No.404, Pondok Cina,<br />
          Kecamatan Beji, Kota Depok, Jawa Barat 16424
        </address>

      </div>

    </div>

    <!-- Copyright Sub-footer -->
    <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7d827f]">
      <span>© {new Date().getFullYear()} EHA Institute. All rights reserved.</span>
      <div class="flex gap-4 mt-2 sm:mt-0">
        <a href="#privacy" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#terms" class="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

