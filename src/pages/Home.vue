<template>
  <q-page>
    <q-carousel animated v-model="slide" arrows navigation infinite autoplay class="h-lg md:h-screen bg-yellow-400">
      <q-carousel-slide v-for="(item, k) in slides" :key="k" :name="item.name" :img-src="item.link"
        class="bg-blend-darken bg-gray-800 bg-opacity-20" />
    </q-carousel>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
const slides = [
  {
    name: 1,
    link: "carousel_a.jpg",
  },
  {
    name: 2,
    link: "carousel_b.jpg",
  },
];
</script>
