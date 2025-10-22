<template>
  <footer class="bg-[#F8FBFF] border-t border-[#E6F0F8] text-[#4B5563]">
    <div
      class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left"
    >
      <!-- Kolom 1 -->
      <div>
        <div class="flex items-center mb-6">
          <img
            src="@/assets/icon/sadigit.png"
            alt="SADIGIT Logo"
            class="w-48 object-contain"
          />
        </div>
        <p class="text-[15px] leading-relaxed text-[#4B5563]">
          Jasa konsultan IT, perdagangan software & hardware, serta pengembangan
          aplikasi digital untuk pemerintahan dan bisnis.
        </p>
      </div>

      <!-- Kolom 2 -->
      <div>
        <h3 class="text-lg font-semibold text-[#0057B7] mb-4">Layanan</h3>
        <ul class="space-y-3 text-[15px] text-[#4B5563]">
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >Pembuatan Website</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >Pembuatan Aplikasi Mobile</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-[#0057B7] transition-colors"
              >Aplikasi E-Government</a
            >
          </li>
        </ul>

        <button
          class="mt-6 bg-[#E6F0F8] hover:bg-[#D4E4F4] text-[#0057B7] font-medium px-5 py-2 rounded-md transition-all flex items-center gap-2"
        >
          Gabung Affiliate
          <i class="fa-solid fa-arrow-right text-sm"></i>
        </button>
      </div>

      <!-- Kolom 3 -->
      <div>
        <h3 class="text-lg font-semibold text-[#0057B7] mb-4">
          Berita Terbaru
        </h3>
        <ul class="space-y-6 text-[15px]">
          <li class="flex gap-3 group">
            <img
              src="#"
              alt="Berita 1"
              class="w-20 h-16 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p
                class="font-medium text-[#003875] group-hover:text-[#0057B7] transition-colors"
              >
                Jasa Pembuatan Software Terpercaya – Sadigit
              </p>
              <p class="text-sm text-[#6B7280] mt-1 flex items-center gap-1">
                <i class="fa-regular fa-calendar text-[#0057B7]"></i> October 6,
                2025
              </p>
            </div>
          </li>

          <li class="flex gap-3 group">
            <img
              src="#"
              alt="Berita 2"
              class="w-20 h-16 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p
                class="font-medium text-[#003875] group-hover:text-[#0057B7] transition-colors"
              >
                Pemanfaatan AI Dalam Kehidupan Sehari-Hari
              </p>
              <p class="text-sm text-[#6B7280] mt-1 flex items-center gap-1">
                <i class="fa-regular fa-calendar text-[#0057B7]"></i> September
                30, 2025
              </p>
            </div>
          </li>

          <li class="flex gap-3 group">
            <img
              src="#"
              alt="Berita 3"
              class="w-20 h-16 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p
                class="font-medium text-[#003875] group-hover:text-[#0057B7] transition-colors"
              >
                Produk Digital Terlaris Untuk Freelance Designer
              </p>
              <p class="text-sm text-[#6B7280] mt-1 flex items-center gap-1">
                <i class="fa-regular fa-calendar text-[#0057B7]"></i> September
                29, 2025
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Kolom 4 -->
      <div>
        <h3 class="text-lg font-semibold text-[#0057B7] mb-4">Hubungi Kami</h3>
        <ul class="space-y-3 text-[15px] text-[#4B5563]">
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-envelope text-[#0057B7]"></i>
            <a
              href="mailto:admin@sadigit.co.id"
              class="hover:text-[#0057B7] transition-colors"
              >admin@sadigit.co.id</a
            >
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-phone text-[#0057B7]"></i>
            <a
              href="tel:+6287840166999"
              class="hover:text-[#0057B7] transition-colors"
              >087840166999</a
            >
          </li>
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-location-dot text-[#0057B7] mt-1"></i>
            <span>
              Komplek Golden Housing Islamic, Jl. Kutamaya Cluster C8,
              Kotakulon, Kec. Sumedang Sel., Kabupaten Sumedang, Jawa Barat
              45311
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-[#E6F0F8] mt-10">
      <div
        class="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-[#4B5563]"
      >
        <p>
          © 2025 -
          <span class="font-semibold text-[#0057B7]"
            >PT Sawarga Digital Indonesia</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// statis
</script>

<style scoped>
footer {
  font-family: "Inter", sans-serif;
}
</style>
