<template>
  <footer class="bg-blue-50 border-t border-blue-100 mt-16">
    <div
      class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left"
    >
      <!-- Kolom 1: Logo & Deskripsi -->
      <div>
        <div class="flex items-center gap-2 mb-6">
          <img
            src="@/assets/img/sadigit.png"
            alt="SmartTax Logo"
            class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
          />
        </div>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
          Solusi digital untuk pengelolaan pajak dan retribusi daerah yang
          efisien, transparan, dan modern.
        </p>
      </div>

      <!-- Kolom 2: Layanan -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Layanan</h3>
        <ul class="space-y-2 text-sm md:text-base text-gray-600">
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >Pembuatan Website</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >Aplikasi Mobile</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >E-Government</a
            >
          </li>
        </ul>
      </div>

      <!-- Kolom 3: Berita -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Berita Terbaru</h3>
        <ul class="space-y-2 text-sm md:text-base text-gray-600">
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >Digitalisasi Pajak Daerah 2025</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >SmartTax hadir di berbagai daerah</a
            >
          </li>
        </ul>
      </div>

      <!-- Kolom 4: Kontak -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Hubungi Kami</h3>
        <ul class="text-sm md:text-base text-gray-600 space-y-2">
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-envelope text-[#0057B7]"></i>
            <a href="mailto:info@smarttax.id" class="hover:text-[#0057B7]"
              >info@smarttax.id</a
            >
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-phone text-[#0057B7]"></i>
            <a href="tel:+628123456789" class="hover:text-[#0057B7]"
              >+62 812 3456 789</a
            >
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-location-dot text-[#0057B7] mt-1"></i>
            <span>Jl. Raya Pajak No. 10, Bandung, Jawa Barat</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Garis pemisah & copyright -->
    <div class="border-t border-blue-100 mt-8">
      <div
        class="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600"
      >
        <p>
          © 2025
          <span class="font-semibold text-[#0057B7]">SmartTax Solutions</span>.
          All rights reserved.
        </p>
        <p class="mt-2 sm:mt-0">
          Made with ❤️ by
          <span class="text-[#0057B7] font-medium">SmartTax Dev Team</span>
        </p>
      </div>
    </div>
  </footer>
</template>
