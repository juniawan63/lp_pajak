<template>
  <div
    class="relative bg-gradient-to-b from-[#EAF2FF] via-white to-[#DFF5FF] text-gray-800 font-sans min-h-screen"
  >
    <!-- Hero Section -->
    <HeroSection />

    <!-- Logo -->
    <Logo />

    <!-- Tombol WhatsApp -->
    <WhatsApp />

    <!-- Product Section -->
    <section class="w-full py-20">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-left text-[#0057B7] mb-10">
          Layanan Kami
        </h2>

        <!-- Grid Produk -->
        <div
          v-if="products.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <router-link
            v-for="(product, index) in products"
            :key="index"
            :to="product.link"
            class="group bg-[#0057B7] rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full cursor-pointer hover:scale-[1.02] duration-300"
          >
            <!-- Gambar -->
            <div class="bg-[#004a9e] p-6 flex justify-center items-center h-52">
              <img
                :src="product.img"
                :alt="product.title"
                class="object-contain w-auto h-full max-h-40 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <!-- Konten -->
            <div class="p-6 flex flex-col justify-between flex-grow text-left bg-white">
              <div>
                <h3
                  class="text-lg font-semibold text-[#0057B7] mb-2 group-hover:text-[#FAB715] transition-colors"
                >
                  {{ product.title }}
                </h3>
                <p class="text-gray-600 mb-3 text-sm leading-relaxed">
                  {{ product.desc }}
                </p>
              </div>

              <div
                class="mt-5 text-sm font-semibold text-[#FAB715] flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Detail Aplikasi →
              </div>
            </div>
          </router-link>
        </div>

        <!-- Jika tidak ada produk -->
        <div v-else class="text-center text-gray-500 py-10">
          Tidak ada produk di kategori ini.
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import Logo from "@/components/Logo.vue";
import WhatsApp from "@/components/WhatsApp.vue";

// Data produk khusus untuk halaman ini
const products = [
  {
    title: "SMART PBB",
    desc: "Sistem informasi untuk mendukung kegiatan pengelolaan dan pelayanan pajak bumi dan bangunan.",
    img: new URL("@/assets/img/smartpbb.png", import.meta.url).href,
    link: "/smart-pbb",
  },
  {
    title: "BPHTB Online",
    desc: "Sistem informasi pengelolaan bea perolehan hak atas tanah dan bangunan (BPHTB).",
    img: new URL("@/assets/img/bpthb.png", import.meta.url).href,
    link: "/bphtb-online",
  },
  {
    title: "Dashboard Pajak Daerah",
    desc: "Dashboard realisasi pajak daerah yang terintegrasi dengan semua jenis pajak daerah.",
    img: new URL("@/assets/img/siapdol.png", import.meta.url).href,
    link: "/siapdol",
  },
  {
    title: "SIPPADU",
    desc: "Aplikasi pelaporan pajak daerah yang memudahkan wajib pajak melakukan pelaporan secara daring.",
    img: new URL("@/assets/img/sippadu.png", import.meta.url).href,
    link: "/sippadu",
  },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
