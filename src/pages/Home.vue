<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    navigation
    infinite
    autoplay
    class="h-lg md:h-2xl"
  >
    <q-carousel-slide :name="1" img-src="carousel_a.jpg" />
    <q-carousel-slide :name="2" img-src="carousel_b.jpg" />
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>
