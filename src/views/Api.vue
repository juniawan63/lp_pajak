<template>
  <section
    class="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 py-20 px-6 md:px-16 text-gray-800 flex items-center"
  >
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Gambar -->
      <div class="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
          alt="Integrasi API dan Gateway"
          class="w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      <!-- Deskripsi -->
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-green-700 leading-snug">
          Integrasi API & Gateway
        </h2>

        <p class="text-gray-600 leading-relaxed mb-4">
          Aplikasi ini mendukung <span class="font-semibold text-green-700">integrasi antar sistem</span> 
          pemerintah dan lembaga keuangan melalui standar API modern seperti 
          <span class="font-semibold text-gray-800">REST, SOAP, dan OpenAPI</span>.
        </p>

        <p class="text-gray-600 leading-relaxed mb-4">
          Dengan fitur <span class="font-semibold text-gray-800">API Gateway</span> yang kuat, sistem 
          dapat menghubungkan berbagai layanan seperti pelaporan pajak, validasi data wajib pajak, 
          hingga koneksi ke sistem perbankan secara real-time dan aman.
        </p>

        <ul class="list-disc list-inside space-y-2 text-green-700 mb-6">
          <li>API Gateway & Webhook</li>
          <li>OAuth2 & Token Authentication</li>
          <li>Dokumentasi OpenAPI</li>
        </ul>

        <p class="text-gray-600 leading-relaxed mb-6">
          Dengan integrasi ini, setiap proses pertukaran data antar sistem menjadi 
          <span class="font-semibold text-green-700">lebih cepat, efisien, dan transparan</span>.
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

    <!-- Dekorasi -->
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
