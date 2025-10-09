<template>
  <section
    class="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 py-20 px-6 md:px-16 text-gray-800 flex items-center"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Gambar -->
      <div class="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt="Keamanan dan Kepatuhan"
          class="w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      <!-- Deskripsi -->
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-green-700 leading-snug">
          Keamanan & Kepatuhan
        </h2>

        <p class="text-gray-600 leading-relaxed mb-4">
          Fitur ini memastikan setiap <span class="font-semibold text-green-700">transaksi pajak daerah</span>
          berlangsung aman dan sesuai regulasi yang berlaku pada sistem perbankan serta
          lembaga pemerintahan. Keamanan data dan kepatuhan menjadi prioritas utama dalam
          mendukung transparansi serta kepercayaan publik.
        </p>

        <p class="text-gray-600 leading-relaxed mb-4">
          Setiap proses transaksi dilindungi dengan <span class="font-semibold text-gray-800">enkripsi end-to-end</span>,
          audit trail yang lengkap untuk pelacakan aktivitas, dan standar
          <span class="font-semibold text-gray-800">sertifikasi & compliance</span> yang memastikan sistem memenuhi
          regulasi nasional maupun internasional.
        </p>

        <ul class="list-disc list-inside space-y-2 text-green-700 mb-6">
          <li>Enkripsi end-to-end</li>
          <li>Audit trail lengkap</li>
          <li>Sertifikasi & Compliance</li>
        </ul>

        <p class="text-gray-600 leading-relaxed mb-6">
          Dengan penerapan sistem keamanan berlapis dan audit yang transparan, aplikasi ini
          menjamin integritas data dan memastikan seluruh transaksi pajak daerah tetap
          <span class="font-semibold text-green-700">aman, akurat, dan sesuai ketentuan hukum</span>.
        </p>

        <!-- Tombol CTA -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/produk"
            class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Detail Aplikasi
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
    </div>

    <!-- Efek Dekoratif -->
    <div class="absolute top-20 left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
  </section>
</template>

<script setup>
const whatsappLink = "https://wa.me/6282116081198";
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-up {
  animation: fadeInUp 1s ease-out;
}
</style>
