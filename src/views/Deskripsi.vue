<template>
  <section class="relative bg-gradient-to-b from-green-50 via-white to-blue-50 py-20 px-6 md:px-16 text-gray-800">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Gambar ilustrasi -->
      <div class="flex justify-center">
        <img
          src="@/assets/img/banner.png"
          alt="Ilustrasi Aplikasi Pajak"
          class="w-full max-w-md rounded-2xl shadow-lg object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      <!-- Teks penjelasan -->
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-green-700">
          Aplikasi Perpajakan Digital
        </h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Aplikasi ini membantu Anda mengelola urusan pajak dengan cepat, mudah, dan aman. 
          Dengan teknologi terbaru, semua proses pelaporan dan perhitungan pajak dapat dilakukan 
          secara otomatis hanya melalui satu platform.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
          Didesain untuk kebutuhan individu maupun bisnis, aplikasi ini memastikan Anda selalu 
          patuh terhadap peraturan perpajakan tanpa repot. Semua data tersimpan dengan enkripsi 
          dan keamanan berlapis.
        </p>

        <div class="flex gap-4">
          <a
            href="#"
            class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition-colors duration-300"
          >
            Pelajari Lebih Lanjut
          </a>
          <a
            href="#"
            class="border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold shadow-sm transition-colors duration-300"
          >
            Coba Sekarang
          </a>
        </div>
      </div>
    </div>

    <!-- Ornamen dekoratif -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
  </section>
</template>

<script setup>
// Tidak perlu script khusus, kecuali kamu ingin binding dinamis
</script>
