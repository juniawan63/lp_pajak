<template>
  <div
    class="bg-white border border-blue-100 shadow-sm rounded-2xl p-8 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-lg"
  >
    <img
      :src="product.img"
      :alt="product.title"
      class="w-20 h-20 mx-auto mb-5"
    />
    <h3 class="text-lg font-semibold text-blue-700 mb-2">
      {{ product.title }}
    </h3>
    <p class="text-gray-600 text-sm mb-4">
      {{ product.desc }}
    </p>
    <a href="#" class="text-green-600 font-medium hover:underline">
      Selengkapnya →
    </a>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
