<script>
  export let foundedYear = '20XX';
</script>

<section class="py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-white/5 border border-white/10 p-6 sm:p-10">
      
      <!-- Left: Image Placeholder (5 cols) -->
      <div class="md:col-span-5">
        <div class="w-full aspect-[4/3] bg-[#cce3d2] flex items-center justify-center relative overflow-hidden shadow-sm">
          <span class="text-[#306947]/40 font-mono text-xs uppercase tracking-wider">
            Institute Archive
          </span>
        </div>
      </div>

      <!-- Right: Content & Button (7 cols) -->
      <div class="md:col-span-7 flex flex-col justify-center">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug mb-4">
          EHA Institute is orem ipsum dolor sit amet, consectetuer adipiscing elit founded in {foundedYear}.
        </h3>

        <p class="text-xs sm:text-sm text-white/85 font-normal leading-relaxed mb-8">
          EHA Institute is orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>

        <div>
          <a href="#mission-values" class="btn-outline group">
            <span class="text-[10px] transform group-hover:translate-x-0.5 transition-transform">▸</span>
            <span>MISSION & VALUES</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

