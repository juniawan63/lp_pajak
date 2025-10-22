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

    <Contact/>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import Logo from "@/components/Logo.vue";
import WhatsApp from "@/components/WhatsApp.vue";
import Contact from "@/components/ContactSection.vue";

// Data produk khusus untuk halaman ini
const products = [
  {
  title: "Koneksi SFTP & API Realtime",
  desc: "Mendukung integrasi langsung antara sistem pajak daerah dan perbankan melalui protokol SFTP dan API realtime berbasis REST, SOAP, dan OpenAPI.",
  img: new URL("@/assets/icon/hthb.png", import.meta.url).href,
  link: "/host-to-host",
},
{
  title: "Enkripsi & Sertifikasi Digital",
  desc: "Menjamin keamanan data dan transaksi melalui enkripsi digital serta sertifikasi yang sesuai standar lembaga keuangan dan pemerintahan.",
  img: new URL("@/assets/icon/hthb.png", import.meta.url).href,
  link: "/host-to-host",
},
{
  title: "Rekonsiliasi Otomatis",
  desc: "Mempermudah proses verifikasi dan pencocokan data transaksi pajak secara otomatis antara sistem daerah dan bank.",
  img: new URL("@/assets/icon/hthb.png", import.meta.url).href,
  link: "/host-to-host",
}
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
