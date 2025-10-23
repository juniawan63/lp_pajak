<template>
  <section class="bg-blue-50 py-10 px-8 rounded-2xl mt-8">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
    >
      <!-- Kolom Teks -->
      <div class="text-left">
        <h2
          class="text-3xl sm:text-4xl font-bold text-[#0057B7] leading-snug mb-4"
        >
          Punya Pertanyaan? <br />
          Team Kami Siap Membantu Kamu.
        </h2>
        <p class="text-gray-700 text-base leading-relaxed mb-8 max-w-md">
          Tanya terkait produk, harga, layanan atau hal lainnya. Team kami siap
          membantu permasalahan anda.
        </p>
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-[#0057B7] text-[#0057B7] hover:bg-[#0057B7] hover:text-white hover:border-[#0057B7] font-semibold px-6 py-2.5 rounded-2xl transition-all duration-300 text-sm md:text-base">
          WhatsApp
        </a>

      </div>

      <!-- Kolom Gambar -->
      <div class="flex justify-center">
        <img
          src="/src/assets/icon/ILUSTRASI.png"
          alt="Ilustrasi Bantuan"
          class="w-80 sm:w-96 object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const phoneNumber = "6282116081198";
const message = "Halo kak, saya ingin bertanya.";

const whatsappLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});
</script>
