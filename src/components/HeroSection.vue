<template>
  <section
    class="relative w-full min-h-screen bg-white py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
  >
    <!-- Latar belakang grafis biru -->
    <div
      class="absolute inset-0 z-0 bg-gradient-to-b from-[#0057B7] to-[#004a9e] clip-wave"
    ></div>

    <!-- Aksen kuning (lebih halus dan seimbang) -->
    <div
      class="absolute bottom-0 right-0 w-[30%] h-[250px] bg-[#FAB715] rounded-tl-[120px] shadow-xl opacity-90"
    ></div>

    <!-- Konten -->
    <div class="max-w-3xl space-y-8 relative z-10 text-white">
      <!-- Judul -->
      <h1 class="font-extrabold leading-snug">
        <!-- Mobile: 3 baris -->
        <span class="block text-3xl sm:text-4xl md:hidden text-white">
          Solusi Digital
        </span>
        <span class="block text-3xl sm:text-4xl md:hidden text-white">
          Perpajakan Modern
        </span>
        <span class="block text-3xl sm:text-4xl md:hidden text-white">
          Aplikasi Pajak Daerah
        </span>

        <!-- Desktop: 2 baris (lebih kecil) -->
        <span
          class="hidden md:block drop-shadow text-3xl lg:text-4xl text-[#0057B7] whitespace-nowrap"
        >
          Solusi Digital Perpajakan Modern
        </span>
        <span
          class="hidden md:block drop-shadow text-3xl lg:text-4xl text-[#0057B7]"
        >
          Aplikasi Pajak Daerah
        </span>
      </h1>

      <!-- Gambar -->
      <div class="relative flex justify-center mt-10 mb-15 md:mt-12">
        <div
          class="absolute w-60 h-60 md:w-64 md:h-64 bg-[#FAB715] opacity-20 blur-3xl rounded-full -z-10 top-8"
        ></div>
        <img
          :src="heroImage"
          alt="Mockup Aplikasi Pajak"
          class="w-full max-w-xs sm:max-w-md md:max-w-md object-contain drop-shadow-2xl animate-fadeInUp"
        />
      </div>

      <!-- Deskripsi -->
      <p
        class="text-gray-100 text-base md:text-lg leading-relaxed max-w-xl mx-auto drop-shadow-md"
      >
        e-Tax adalah solusi digital inovatif untuk pengelolaan pajak dan retribusi
        daerah. Didesain khusus bagi instansi seperti
        <span class="font-semibold text-white drop-shadow-md"
          >BAPENDA, BKD, dan BPKAD</span
        >
        untuk meningkatkan efisiensi, transparansi, dan pelayanan publik.
      </p>

      <!-- Tombol CTA -->
      <div class="flex flex-col sm:flex-row justify-center gap-3 pt-4">
        <a
          href="/deskripsi"
          class="bg-white text-[#0057B7] hover:bg-[#FAB715] hover:text-white font-semibold px-6 py-2.5 rounded-2xl shadow-md transition-all duration-300 text-sm md:text-base"
        >
          Pelajari Lebih Lanjut
        </a>
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-white text-white hover:bg-[#FAB715] hover:border-[#FAB715] font-semibold px-6 py-2.5 rounded-2xl transition-all duration-300 text-sm md:text-base"
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
/* Animasi */
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

/* Bentuk wave lebih rapi dan halus */
.clip-wave {
  clip-path: path(
    "M0,300 C300,50 950,450 1550,250 L1550,900 L0,900 Z"
  );
}

/* Responsif tambahan agar wave tetap proporsional */
@media (max-width: 768px) {
  .clip-wave {
    clip-path: path(
      "M0,0 C300,0 800,250 1440,0 L1440,800 L0,800 Z"
    );
  }
}
</style>
