<template>
  <section
    class="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50 py-20 px-6 md:px-16 text-gray-800 flex items-center"
  >
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center">
        <img
          src="@/assets/img/banner.png"
          alt="Ilustrasi Aplikasi Pajak Daerah"
          class="w-full max-w-lg rounded-2xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-green-700 leading-snug">
          Aplikasi Perpajakan Daerah Digital
        </h2>

        <p class="text-gray-600 leading-relaxed mb-4">
          <span class="font-semibold text-green-700">Aplikasi Pemerintah e-Tax</span> atau
          <span class="font-semibold text-green-700">Aplikasi Pajak Daerah Online</span>
          merupakan solusi digital untuk pengelolaan pajak dan retribusi daerah secara terintegrasi.
          Aplikasi ini membantu instansi pemerintah dalam mempercepat proses administrasi, pelaporan,
          serta perhitungan pajak dengan sistem yang efisien, transparan, dan akurat.
        </p>

        <p class="text-gray-600 leading-relaxed mb-4">
          Aplikasi ini diperuntukkan bagi instansi seperti
          <span class="font-semibold text-gray-800">
            Badan Pengelolaan Pendapatan Daerah (BAPENDA),
            Badan Keuangan Daerah (BKD),
            serta Badan Pendapatan, Pengelolaan Keuangan, dan Aset Daerah (BPKAD)
          </span>.
          Dengan teknologi digital modern, seluruh proses dapat dilakukan otomatis melalui satu
          platform yang mudah diakses dan aman.
        </p>

        <p class="text-gray-600 leading-relaxed mb-6">
          Aplikasi ini juga dilengkapi dengan fitur pelaporan pajak online, integrasi database,
          dan sistem keamanan berlapis yang memastikan data wajib pajak selalu terlindungi.
          Didesain untuk memenuhi kebutuhan lembaga pemerintahan, aplikasi ini mendukung peningkatan
          efisiensi kerja dan pelayanan publik di bidang perpajakan daerah.
        </p>

        <!-- Tombol CTA -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <a
          href="/produk"
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
        >
          Lihat Produk
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

    <div class="absolute top-20 left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
  </section>
</template>

<script setup>

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
