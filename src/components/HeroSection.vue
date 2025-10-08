<template>
  <section
    class="w-full bg-gradient-to-r from-blue-50 via-green-50 to-white py-20 px-6 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-12"
  >
    <!-- Teks -->
    <div class="text-center md:text-left md:w-1/2 space-y-6">
      <h1
        class="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight"
      >
        Solusi Digital Perpajakan Modern
        <br />
        <span class="text-green-600">Aplikasi Pajak Daerah</span>
      </h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        Aplikasi pemerintah e-Tax merupakan solusi digital untuk pengelolaan
        pajak dan retribusi daerah. Didesain khusus bagi instansi seperti
        <span class="font-medium text-gray-700">
          BAPENDA, BKD, dan BPKAD
        </span>
        untuk meningkatkan efisiensi, transparansi, dan pelayanan publik.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
        <a
          href="#produk"
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
        >
          Pelajari Lebih Lanjut
        </a>
        <a
          href="#kontak"
          class="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </div>

    <!-- Gambar Mockup -->
    <div class="relative md:w-1/2 flex justify-center">
      <img
        :src="heroImage"
        alt="Mockup Aplikasi Pajak"
        class="w-full max-w-lg md:max-w-xl object-contain drop-shadow-xl"
      />

      <!-- Efek dekoratif -->
      <div
        class="absolute -z-10 bg-green-200 rounded-full w-72 h-72 blur-3xl opacity-30 top-10 right-10"
      ></div>
    </div>
  </section>
</template>

<script setup>
const heroImage = new URL("@/assets/img/banner.png", import.meta.url).href;
</script>
