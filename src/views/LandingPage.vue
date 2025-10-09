<template>
  <div class="relative bg-gradient-to-b from-blue-50 via-white to-green-50 text-gray-800 font-sans min-h-screen">
    <!-- Hero Section -->
    <HeroSection />

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
            class="p-4 flex items-center gap-3 hover:bg-green-50 transition-colors"
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
        <h2 class="text-3xl md:text-4xl font-bold text-left text-green-600 mb-14">
          Layanan Kami
        </h2>

        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          
          <router-link
            v-for="(product, index) in products"
            :key="index"
            :to="product.link"
            class="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-green-400 overflow-hidden flex flex-col h-full cursor-pointer"
          >
            
            <div class="bg-blue-50 p-6 flex justify-center items-center h-52">
              <div class="bg-blue-50 flex justify-center items-center h-48 overflow-hidden">
                <img
                  :src="product.img"
                  :alt="product.title"
                  class="object-contain w-auto h-full max-h-40 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            

            
            <div class="p-6 flex flex-col justify-between flex-grow text-left">
              <div>
                <h3
                  class="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors"
                >
                  {{ product.title }}
                </h3>
                <p class="text-gray-600 mb-3 text-sm leading-relaxed">
                  {{ product.desc }}
                </p>
                <ul
                  class="text-gray-700 text-sm list-disc list-inside space-y-1 pl-2 group-hover:text-blue-600 transition-colors"
                >
                  <li
                    v-for="(item, i) in product.features"
                    :key="i"
                    class="hover:text-gray-950 transition-colors"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="mt-4 text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
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
    title: "Aplikasi Perpajakan Daerah",
    desc: "Aplikasi e-Tax pemerintah membantu pengelolaan pajak dan retribusi daerah secara digital, meningkatkan efisiensi dan transparansi.",
    img: new URL("@/assets/img/banner.png", import.meta.url).href,
    link: "/produk",
    features: ["BPHTB Online", "Dashboard Pajak Daerah", "SIPPADU", "SMART PBB"],
  },
  {
    title: "Integrasi API & Gateway",
    desc: "Integrasi antar sistem pemerintahan dan bank melalui API terstandar (REST, SOAP, OpenAPI).",
    img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    link: "/api-gateway",
    features: [
      "API Gateway & Webhook",
      "OAuth2 & Token Authentication",
      "Dokumentasi OpenAPI",
    ],
  },
  {
    title: "Host-to-Host dengan Bank",
    desc: "Bridging antara sistem pajak daerah dengan perbankan untuk pembayaran, verifikasi, dan rekonsiliasi otomatis.",
    img: "https://cdn-icons-png.flaticon.com/512/9526/9526122.png",
    link: "/host-to-host",
    features: [
      "Koneksi SFTP & API Realtime",
      "Enkripsi & Sertifikasi Digital",
      "Rekonsiliasi Otomatis",
    ],
  },
  {
    title: "Keamanan & Kepatuhan",
    desc: "Menjamin keamanan transaksi dan kepatuhan terhadap regulasi perbankan dan pemerintahan.",
    img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    link: "/security",
    features: ["Enkripsi end-to-end", "Audit trail lengkap", "Sertifikasi & Compliance"],
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
