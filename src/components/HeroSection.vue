<template>
  <section
    class="w-full bg-gradient-to-r from-blue-50 via-green-50 to-white py-20 px-6 flex flex-col items-center justify-center text-center"
  >
    <div class="max-w-4xl space-y-6">
      <!-- Judul -->
      <h1 class="font-extrabold leading-tight">
        <!-- Mobile: 3 baris -->
        <span
          class="block text-3xl sm:text-4xl md:hidden text-blue-700"
        >
          Solusi Digital
        </span>
        <span
          class="block text-3xl sm:text-4xl md:hidden text-blue-700"
        >
          Perpajakan Modern
        </span>
        <span
          class="block text-3xl sm:text-4xl md:hidden text-green-600"
        >
          Aplikasi Pajak Daerah
        </span>

        <!-- Desktop: 2 baris -->
        <span
          class="hidden md:block text-5xl text-blue-700 whitespace-nowrap"
        >
          Solusi Digital Perpajakan Daerah
        </span>
        <span
          class="hidden md:block text-5xl text-green-600"
        >
          Aplikasi Pajak Modern
        </span>
      </h1>

      <!-- Gambar -->
      <div class="relative flex justify-center mt-14">
        <img
          :src="heroImage"
          alt="Mockup Aplikasi Pajak"
          class="w-full max-w-xs sm:max-w-md md:max-w-md object-contain drop-shadow-2xl animate-fadeInUp"
        />
        <div
          class="absolute -z-10 bg-green-200 rounded-full w-72 h-72 blur-3xl opacity-30 top-10 right-10 animate-pulse"
        ></div>
      </div>

      <!-- Deskripsi -->
      <p class="text-gray-600 text-lg leading-relaxed">
        Aplikasi pemerintah e-Tax merupakan solusi digital untuk pengelolaan pajak dan retribusi daerah.
        Didesain khusus bagi instansi seperti
        <span class="font-semibold text-gray-800">BAPENDA, BKD, dan BPKAD</span>
        untuk meningkatkan efisiensi, transparansi, dan pelayanan publik.
      </p>

      <!-- Tombol CTA -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <a
          href="/deskripsi"
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
        >
          Pelajari Lebih Lanjut
        </a>
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
        >
          Konsultasi Gratis
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const heroImage = new URL("@/assets/img/banner.png", import.meta.url).href;
const phoneNumber = "6282116081198";
const message = "Halo kak, saya ingin bertanya tentang aplikasi perpajakan.";

const whatsappLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}
</style>
