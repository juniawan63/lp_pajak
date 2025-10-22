<template>
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
</template>

<script setup>
import { ref, computed } from "vue";
// State pop-up chat
const isOpen = ref(false);
const toggleChat = () => (isOpen.value = !isOpen.value);

// WhatsApp
const phoneNumber = "6282116081198";
const message = "Halo kak, saya ingin bertanya tentang aplikasi perpajakan.";
const whatsappLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});
</script>
