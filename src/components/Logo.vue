<template>
  <section
    class="bg-white mt-12 mb-12 overflow-hidden"
    data-aos="fade-left">
    <p class="text-gray-800 font-bold text-2xl py-10">Kerjasama & Testimoni</p>
    <!-- Wrapper slider -->
    <div class="relative w-full h-[280px] overflow-hidden">
      <div class="relative w-full h-full">
          <div
            class="absolute top-0 left-0 w-full h-full flex transition-transform duration-1500 ease-in-out"
            :style="{ transform: `translateX(-${currentGroup * 100}%)` }"
          >
          <!-- Setiap grup 3 instansi -->
          <div
            v-for="(group, gi) in groups"
            :key="gi"
            class="flex w-full justify-center gap-12 flex-shrink-0"
          >
            <div
              v-for="(client, i) in group"
              :key="`${client.name}-${i}`"
              class="flex flex-col items-center space-y-4 animate-float"
            >
              <img
                :src="client.img"
                :alt="client.name"
                class="h-20 opacity-85 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
              <p class="text-gray-800 font-semibold text-lg">{{ client.name }}</p>
              <p class="text-gray-500 text-sm leading-relaxed max-w-xs">
                {{ client.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import bapendaSmd from "@/assets/img/logo-bapenda-sumedang.png";
import bapendaButon from "@/assets/img/butonutara.png";
import bpkadSeluma from "@/assets/img/bpkad.png";
import bankBjbSumedang from "@/assets/icon/bank (1).png";
import bankSulman from "@/assets/icon/bank (2).png";
import bankSultra from "@/assets/icon/bank (3).png";
import bankSulselbar from "@/assets/icon/bank (4).png";
// Data instansi
const clients = [
  {
    img: bapendaSmd,
    name: "Bapenda Kabupaten Sumedang",
    desc: "Bapenda Sumedang memanfaatkan layanan Sagidit untuk membangun sistem e-PBB dan dashboard pajak daerah yang terintegrasi.",
  },
  {
    img: bapendaButon,
    name: "Bapenda Kabupaten Buton Utara",
    desc: "Dengan dukungan Sagidit, Bapenda Buton Utara berhasil mengimplementasikan sistem digital manajemen pajak daerah.",
  },
  {
    img: bpkadSeluma,
    name: "BPKAD Kabupaten Seluma Bengkulu",
    desc: "BPKAD Seluma Bengkulu menggunakan Sagidit Financial Dashboard untuk memantau arus keuangan daerah secara transparan.",
  },
  {
  img: bankBjbSumedang,
  name: "Bank BJB Cabang Sumedang",
  desc: "BJB Sumedang berkolaborasi dengan Sagidit dalam pengembangan sistem Host to Host pajak daerah, memastikan transaksi berjalan aman dan realtime.",
  },
  {
    img: bankSultra,
    name: "Bank Sulawesi Utara",
    desc: "Dengan integrasi Sagidit, Bank Sulawesi Utara kini memiliki sistem pelaporan pajak daerah yang lebih cepat dan efisien melalui koneksi digital langsung.",
  },
  {
    img: bankSulman,
    name: "Bank Sulawesi Mandiri",
    desc: "Bank Sulawesi Mandiri memanfaatkan platform Sagidit untuk mendukung transparansi penerimaan pajak daerah dengan sistem otomasi transaksi yang handal.",
  },
  {
    img: bankSulselbar,
    name: "Bank Sulawesi Selatan dan Barat",
    desc: "Bersama Sagidit, Bank Sulawesi Selatan dan Barat sukses mengimplementasikan konektivitas API dan sistem keamanan transaksi untuk pengelolaan pajak daerah yang modern.",
  },

];

const groupSize = 3;
const groups = computed(() => {
  const res = [];
  for (let i = 0; i < clients.length; i += groupSize) {
    res.push(clients.slice(i, i + groupSize));
  }
  return res;
});

const currentGroup = ref(0);
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentGroup.value = (currentGroup.value + 1) % groups.value.length;
  }, 4000);
});

onBeforeUnmount(() => clearInterval(intervalId));
</script>

<style scoped>
@keyframes float {
  0% { transform: translateX(0px); }
  50% { transform: translateX(-8px); }
  100% { transform: translateX(0px); }
}

.animate-float {
  animation: float 10s ease-in-out infinite;
}

.relative > div {
  transition: transform 1.5s cubic-bezier(0.77, 0, 0.175, 1);
}
</style>
