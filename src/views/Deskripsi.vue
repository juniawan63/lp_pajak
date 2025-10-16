<template>
  <section
    class="relative min-h-screen bg-gradient-to-br from-[#0057B7] to-[#004a9e] py-20 px-6 md:px-16 text-gray-800 flex items-center overflow-hidden"
  >
    <!-- Aksen kuning kiri bawah -->
    <div
      class="absolute bottom-0 left-0 w-[35%] h-[220px] bg-[#FAB715] rounded-tr-[120px] shadow-xl opacity-90"
    ></div>

    <!-- Konten utama -->
    <div
      class="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      <!-- Gambar dengan latar putih -->
      <div class="flex justify-center">
        <div
          class="bg-white rounded-2xl shadow-2xl p-4 hover:scale-105 transition-transform duration-500"
        >
          <img
            src="@/assets/img/banner.png"
            alt="Ilustrasi Aplikasi Pajak Daerah"
            class="w-full max-w-lg rounded-xl object-contain"
          />
        </div>
      </div>

      <!-- Teks -->
      <div>
        <h2
          class="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-snug drop-shadow-lg"
        >
          Aplikasi Perpajakan Daerah Digital
        </h2>

        <p class="text-gray-100 leading-relaxed mb-4 drop-shadow-md">
          <span class="font-semibold text-white">Aplikasi Pemerintah e-Tax</span> atau
          <span class="font-semibold text-white">Aplikasi Pajak Daerah Online</span>
          merupakan solusi digital untuk pengelolaan pajak dan retribusi daerah secara
          terintegrasi. Aplikasi ini membantu instansi pemerintah dalam mempercepat
          proses administrasi, pelaporan, serta perhitungan pajak dengan sistem yang
          efisien, transparan, dan akurat.
        </p>

        <p class="text-gray-100 leading-relaxed mb-4 drop-shadow-md">
          Aplikasi ini diperuntukkan bagi instansi seperti
          <span class="font-semibold text-white">
            Badan Pengelolaan Pendapatan Daerah (BAPENDA), Badan Keuangan Daerah (BKD),
            serta Badan Pendapatan, Pengelolaan Keuangan, dan Aset Daerah (BPKAD)
          </span>. Dengan teknologi digital modern, seluruh proses dapat dilakukan
          otomatis melalui satu platform yang mudah diakses dan aman.
        </p>

        <p class="text-gray-100 leading-relaxed mb-6 drop-shadow-md">
          Aplikasi ini juga dilengkapi dengan fitur pelaporan pajak online, integrasi
          database, dan sistem keamanan berlapis yang memastikan data wajib pajak selalu
          terlindungi. Didesain untuk memenuhi kebutuhan lembaga pemerintahan, aplikasi
          ini mendukung peningkatan efisiensi kerja dan pelayanan publik di bidang
          perpajakan daerah.
        </p>

        <!-- Tombol CTA -->
        <div
          class="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 pt-4"
        >
          <a
            href="/produk"
            class="bg-[#FAB715] hover:bg-[#e5a710] text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Lihat Produk
          </a>
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-white text-white hover:bg-white hover:text-[#0057B7] font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const phoneNumber = "6282116081198";
const message = "Halo, saya ingin bertanya mengenai aplikasi perpajakan daerah.";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>

<style scoped>

</style>
