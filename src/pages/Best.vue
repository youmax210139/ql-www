<template>
  <q-page class="container justify-center mx-auto my-4 md:my-8">
    <div class="grid grid-cols-1 gap-x-2 gap-y-12 md:grid-cols-2">
      <div v-for="(item, k) in bests" :key="k" class="hover:bg-white">
        <q-img :src="item.link" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const bests = ref([
  {
    title: "test1",
    link: "best1.jpeg",
  },
  {
    title: "test2",
    link: "best2.jpeg",
  },
  {
    title: "test3",
    link: "best3.jpeg",
  },
  {
    title: "test4",
    link: "best1.jpeg",
  },
]);
</script>
