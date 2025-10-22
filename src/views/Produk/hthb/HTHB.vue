<template>
  <section
    class="relative w-full min-h-screen bg-white py-10 px-6 flex flex-col justify-center overflow-hidden font-[Montserrat]"
  >
    <!-- Latar belakang grafis biru -->
    <div
      class="absolute inset-0 z-0 bg-gradient-to-b from-[#0057B7] to-[#004a9e] clip-wave"
    ></div>

    <!-- Aksen kuning -->
    <div
      class="absolute bottom-0 right-0 w-[30%] h-[220px] bg-[#FAB715] rounded-tl-[120px] shadow-xl opacity-90"
    ></div>
    
    <!-- Mobile -->
    <h1
      class="block md:hidden text-2xl sm:text-3xl text-white font-extrabold text-center relative z-10 mt-14"
    >
      Host To Host Dengan Bank
    </h1>

    <!-- Desktop -->
    <div
      class="hidden md:block absolute top-24 left-16 text-left z-10"
      data-aos="fade-down"
    >
      <h1
        class="font-extrabold text-xl sm:text-4xl md:text-5xl text-[#005787] tracking-tight drop-shadow-sm"
      >
        Host To Host Dengan Bank
      </h1>
    </div>

    <!-- Konten utama -->
    <div
      class="relative z-10 mt-10 md:mt-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 
      text-white text-center md:text-left"
    >
      <!-- Gambar -->
      <div
        class="order-1 md:order-2 flex justify-center md:justify-end"
      >
        <div
          class="absolute w-72 h-72 bg-[#FAB715] opacity-20 blur-3xl rounded-full -z-10 top-8 right-8 md:right-0"
        ></div>
        <img
          :src="heroImage"
          alt="Mockup Aplikasi Pajak"
          class="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl object-contain drop-shadow-2xl animate-fadeInUp mx-auto"
        />
      </div>

      <!-- Teks & Tombol -->
      <div
        class="order-2 md:order-1 space-y-6 mt-6 md:mt-0 flex flex-col items-center md:items-start"
      >
        <p
          class="text-gray-100 text-lg md:text-xl leading-relaxed max-w-md md:max-w-lg drop-shadow-sm"
        >
        Fitur Host-to-Host menghubungkan sistem pajak daerah langsung ke sistem perbankan untuk pembayaran, verifikasi,
        dan rekonsiliasi otomatis secara real-time, memastikan transaksi cepat dan akurat. Teknologi ini didukung oleh SFTP & API realtime,
        enkripsi & sertifikasi digital, serta rekonsiliasi otomatis, dan dirancang agar aman, efisien, dan sesuai standar perbankan nasional.
        </p>

        <div
          class="flex flex-col sm:flex-row justify-center md:justify-start gap-3 pt-4"
        >
          <a
            href="https://wa.me/6282116081198?text=Halo,%20saya%20ingin%20menjadwalkan%20demo%20aplikasi%20BPHTB."
            target="_blank"
            class="bg-white text-[#0057B7] hover:bg-[#FAB715] hover:text-white font-semibold 
            px-6 py-2.5 rounded-2xl shadow-md transition-all duration-300 text-sm md:text-base"
          >
            Jadwalkan Demo
          </a>

          <a
            href="https://wa.me/6282116081198?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20terkait%20aplikasi%20BPHTB."
            target="_blank"
            class="border-2 border-white text-white hover:bg-[#FAB715] hover:border-[#FAB715] 
            font-semibold px-6 py-2.5 rounded-2xl transition-all duration-300 text-sm md:text-base"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  </section>

    <WhatsApp/>

    <Logo/>

   <!-- DEMO VIDEO -->
    <section class="bg-gradient-to-b from-sky-50 to-white py-24" data-aos="fade-up">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <iframe
            class="w-full h-56 md:h-72"
            src="https://www.youtube.com/embed/ABCDEFHG"
            title="Demo SIPPADU"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="space-y-4 text-left">
          <h2 class="text-5xl font-bold text-[#005787]">Demo Aplikasi BPHTB Online</h2>
          <p class="text-[#005787] text-lg leading-relaxed">
          Aplikasi ini mencakup mulai dari pembayaran, cara membayar pajak secara online, hingga pelaporan PPAT online. Kami siap membantu dinas pendapatan daerah untuk membangun dalam pengelolaan pajak.
          </p>
        </div>
      </div>
    </section>


    <!-- FITUR UTAMA -->
    <section class="bg-gradient-to-t from-sky-50 to-white py-24" data-aos="fade-up">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Judul Besar -->
        <h2 class="text-5xl font-bold text-[#005787] text-center mb-3">
          Fitur 
        </h2>

        <!-- Teks Deskripsi -->
        <p class="text-gray-600 text-lg text-center mb-12">
          Berikut fitur yang terdapat pada aplikasi BPHTB
        </p>

        <!-- Grid Fitur -->
        <div class="grid grid-cols-1 md:grid-cols-6 gap-12 items-start">
          <!-- Kiri: List Fitur Utama -->
          <div class="md:col-span-2 flex flex-col space-y-6">
          <div
            v-for="(f, i) in fitur"
              :key="i"
              class="py-8 px-5 rounded-xl font-semibold leading-snug w-full text-left transition-transform hover:-translate-y-3 flex items-center justify-start h-28 shadow-sm bg-[#005787] text-white">
            <h3 class="text-lg">{{ f }}</h3>
            </div>
          </div>
          <!-- Kanan: Ilustrasi + Sublist -->
          <div class="md:col-span-4 space-y-8">
            <div
              class="relative -mx-6 bg-green-50 py-2 flex justify-center items-center rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <img
                :src="getImgUrl('pbb-fitur.png')"
                alt="Ilustrasi Fitur"
                class="w-full max-w-[260px] md:max-w-[320px] rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            <!-- Sublist Fitur -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-500 text-left mt-2">
            <ul class="list-disc pl-6 space-y-2 text-gray-500 text-lg leading-relaxed">
                <li>Halaman PPAT/ Notaris</li>
                <li>Verifikasi dan Validasi Data : Daftar, Persyaratan, Informasi OP, Validasi SPPT</li>
              </ul>

              <ul class="list-disc pl-6 space-y-2 text-gray-500 text-lg leading-relaxed">
                <li>Pembayaran</li>
                <li>Laporan</li>
                <li>Kuisoner PPAT</li>
              </ul>

              <ul class="list-disc pl-6 space-y-2 text-gray-500 text-lg leading-relaxed">
                <li>Notifikasi</li>
                <li>Pelaporan : SPPD, Data Transaksi</li>
                <li>dan fitur menarik lainnya.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SCREENSHOTS -->
    <section
      id="screenshots"
      class="py-24 bg-gradient-to-t from-white to-sky-50 overflow-hidden"
    >
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h3 class="text-5xl font-bold text-[#005787] mb-4">Screenshot Aplikasi</h3>
        <p class="text-gray-600 text-lg mb-16">
         Buat usahamu berkembang lebih cepat dengan bantuan aplikasi kami.
        </p>

        <!-- Carousel -->
        <div
          ref="carousel"
          class="carousel-container flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab px-6"
          @scroll="handleScroll"
        >
          <div
            v-for="(img, idx) in loopedScreenshots"
            :key="idx"
            class="flex-shrink-0 w-[24%] md:w-[23%] lg:w-[22%] snap-start rounded-2xl overflow-hidden shadow-lg inline-block"
            @click="openLightbox(idx % screenshots.length)"
          >
            <img
              :src="getImgUrl(img)"
              alt="Screenshot"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
              draggable="false"
            />
          </div>
        </div>
      </div>

  <!-- LIGHTBOX -->
  <div
    v-if="lightboxVisible"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <button
      class="absolute top-6 right-6 bg-white text-gray-700 p-3 rounded-full shadow hover:bg-gray-100 transition"
      @click="closeLightbox"
    >
      <i class="fa-solid fa-xmark text-xl"></i>
    </button>

    <button
      class="absolute left-8 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 transition"
      @click="prevImage"
    >
      <i class="fa-solid fa-chevron-left text-2xl"></i>
    </button>

    <img
      :src="getImgUrl(screenshots[currentIndexLightbox])"
      class="max-w-4xl w-full rounded-3xl shadow-2xl border-4 border-white animate-fadeIn"
      alt="Preview"
    />

    <button
      class="absolute right-8 text-white bg-black/40 hover:bg-black/70 rounded-full p-3 transition"
      @click="nextImage"
    >
      <i class="fa-solid fa-chevron-right text-2xl"></i>
    </button>
  </div>
</section>


 <!-- PRODUK -->
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h3 class="text-5xl font-bold text-[#005787] mb-4">Produk</h3>
    <p class="text-gray-600 text-lg mb-4">
      Buat usahamu berkembang lebih cepat dengan bantuan aplikasi kami.
    </p>

    <!-- Tombol Lihat Semua -->
    <div class="flex justify-end mb-3">
      <button
        @click="scrollToTop"
        class="flex items-center gap-2 text-[#FAB715] border border-[#FAB715] rounded-xl px-5 py-2 hover:bg-[#FAB715]/10 transition-all"
      >
        Lihat Semua
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Card Produk -->
  <section class="relative py-8 bg-white overflow-hidden">
    <div class="max-w-5xl mx-auto px-5">
      <div
        class="relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer border border-green-50"
      >
        <!-- BAGIAN KIRI: PUTIH -->
        <div class="absolute left-0 top-0 h-full w-1/2 bg-white"></div>

        <!-- BAGIAN KANAN: BIRU -->
        <div class="absolute right-0 top-0 h-full w-1/2 bg-[#005787]"></div>

        <!-- CORAK PEMBATAS GELOMBANG -->
        <div class="absolute left-1/2 top-0 h-full w-[120px] -translate-x-1/2 z-10 opacity-90">
          <svg viewBox="0 0 120 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="none">
            <path d="M0,0 C40,150 80,350 0,500 L120,500 L120,0 Z" fill="url(#grad1)"/>
            <defs>
              <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#0e99e4ff"/>
                <stop offset="100%" stop-color="#005787"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- ISI CARD -->
        <div class="grid lg:grid-cols-2 gap-8 items-center relative z-20 p-8">
          <!-- TEKS DI BAGIAN PUTIH -->
          <div class="space-y-4 text-[#005787]">
            <h2 class="text-3xl font-bold">
              {{ slides[currentSlide].title }}
            </h2>
            <p class="text-gray-700 leading-relaxed">
              {{ slides[currentSlide].desc }}
            </p>
            <button
              @click="goTo(slides[currentSlide].link)"
              class="mt-2 bg-[#0e99e4ff] px-4 py-2 rounded-lg text-white font-semibold hover:bg-yellow-600 transition"
            >
              Lihat Produk
            </button>
          </div>

          <!-- FOTO DI BAGIAN BIRU -->
          <div class="flex justify-center">
            <div class="bg-[#FAB715] rounded-2xl p-6 flex justify-center items-center w-full max-w-[460px] transition-transform duration-500 hover:scale-105 shadow-md">
              <img :src="getImgUrl(slides[currentSlide].image)" alt="Gambar Slide" class="w-[440px] rounded-xl"/>
            </div>
          </div>
        </div>
      </div>

      <!-- NAVIGASI -->
      <div class="flex justify-center mt-8 gap-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full transition-all"
          :class="currentSlide === index ? 'bg-[#FAB715] scale-125' : 'bg-gray-300'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "vue-router";
import Logo from "@/components/Logo.vue";
import WhatsApp from "@/components/WhatsApp.vue";

const heroImage = new URL("@/assets/img/bpthb.png", import.meta.url).href;
const router = useRouter();
const getImgUrl = (name) =>
  new URL(`../assets/img/${name}`, import.meta.url).href;


/* === FITUR === */
const fitur = [
  "Terintegrasi dengan BPN",
  "Terintergrasi Dengan Bank Daerah",
  "Pelaporan oleh Notaris / PPAT",
  "Realtime Notifikasi",
];


const screenshots = [
  "I.png",
  "II.png",
  "III.png",
  "IV.png",
  "V.png",
  "VI.png",
  "VII.png",
  "IX.png",
 
];


const lightboxVisible = ref(false);
const currentIndexLightbox = ref(0);

const openLightbox = (index) => {
  currentIndexLightbox.value = index;
  lightboxVisible.value = true;
};
const closeLightbox = () => (lightboxVisible.value = false);

const nextImage = () => {
  currentIndexLightbox.value =
    (currentIndexLightbox.value + 1) % screenshots.length;
};
const prevImage = () => {
  currentIndexLightbox.value =
    (currentIndexLightbox.value - 1 + screenshots.length) % screenshots.length;
};


const loopedScreenshots = computed(() => [...screenshots, ...screenshots]);
const carousel = ref(null);

const handleScroll = () => {
  const el = carousel.value;
  if (!el) return;
  const scrollWidth = el.scrollWidth / 2;
  if (el.scrollLeft >= scrollWidth) {
    el.scrollLeft -= scrollWidth;
  } else if (el.scrollLeft <= 0) {
    el.scrollLeft += scrollWidth;
  }
};


const slides = ref([
  {
    title: "SMART PBB",
    desc: "Sistem informasi untuk mendukung kegiatan pengelolaan dan pelayanan pajak bumi dan bangunan.",
    image: "smartpbb.png",
    link: "/smart-pbb",
  },
  {
    title: "BPHTB",
    desc: "Sistem informasi pengelolaan bea perolehan hak atas tanah dan bangunan (BPHTB).",
    image: "bpthb.png",
    link: "/bphtb-online",
  },
  {
    title: "SIAPDOL",
    desc: "Dashboard realisasi pajak daerah yang terintegrasi dengan semua jenis pajak daerah.",
    image: "siapdol.png",
    link: "/siapdol",
  },
  {
    title: "SIPPADU",
    desc: "Aplikasi yang diperuntukkan bagi wajib pajak atau objek pajak dalam pelaporan pajak daerah.",
    image: "sippadu.png",
    link: "/sippadu",
  },
]);

const currentSlide = ref(0);
let slideInterval = null;


onMounted(() => {
  AOS.init({ duration: 900, once: true });

  // Auto slide hero
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 3000);

  // Posisi awal carousel biar smooth
  const el = carousel.value;
  if (el) el.scrollLeft = el.scrollWidth / 4;
});

onBeforeUnmount(() => clearInterval(slideInterval));

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const goTo = (path) => {
  if (router && path) router.push(path);
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}

.clip-wave {
  clip-path: path(
    "M0,300 C300,50 950,450 1550,250 L1550,900 L0,900 Z"
  );
}

@media (max-width: 768px) {
  .clip-wave {
    clip-path: path(
      "M0,0 C300,0 800,250 1440,0 L1440,800 L0,800 Z"
    );
  }
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  display: flex;
  animation: scroll 40s linear infinite;
}


.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.animate-carousel {
  display: flex;
  will-change: transform;
  animation: none;
}
</style>
