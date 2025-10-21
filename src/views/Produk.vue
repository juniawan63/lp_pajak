<template>
  <div class="relative bg-gradient-to-b from-[#EAF2FF] via-white to-[#DFF5FF] text-gray-800 font-sans min-h-screen">
    <!-- Hero Section -->
    <HeroSection />
<logo/>
    <!-- Tombol WhatsApp -->
    <div>
      <button
        @click="toggleChat"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center shadow-lg gap-2 transition-all z-50"
      >
        <i class="fab fa-whatsapp text-xl"></i>
        <span class="hidden md:inline">Halo, bisa kami bantu...?</span>
      </button>

      <!-- Popup Chat -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed bottom-20 right-6 bg-white rounded-xl shadow-2xl w-72 overflow-hidden border border-gray-200 z-50"
        >
           <div class="bg-green-500 text-white p-3 flex justify-between items-center">
            <p class="text-sm font-medium">Tim kami siap membantu Anda</p>
            <button
              @click="toggleChat"
              class="text-white hover:text-gray-200 transition"
              aria-label="Tutup chat"
            >
              ✕
            </button>
          </div>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="p-4 flex items-center gap-3 hover:bg-blue-50 transition-colors"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="Admin"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0"
            />
           <div class="flex-1 text-left">
              <h3 class="font-semibold text-gray-800 leading-tight">Admin</h3>
              <p class="text-sm text-gray-500 -mt-0.5">Tim Pajak Online</p>
              <p class="text-xs text-green-500 font-medium mt-1">Online Sekarang</p>
            </div>
          </a>
        </div>
      </transition>
    </div>

    <!-- Product Section -->
    <section class="w-full py-20">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-left text-[#0057B7] mb-14">
          Layanan Kami
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import Logo from "@/components/Logo.vue";

// Pop-up chat
const isOpen = ref(false);
const toggleChat = () => (isOpen.value = !isOpen.value);

// WhatsApp
const phoneNumber = "6282116081198";
const message = "Halo kak, saya ingin bertanya tentang aplikasi perpajakan.";
const whatsappLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});

// Produk
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
