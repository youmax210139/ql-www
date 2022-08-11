<template>
  <q-page class="container justify-center mx-auto my-4 md:my-8">
    <q-list class="grid grid-cols-1 gap-y-12 md:grid-cols-2">
      <shop-item v-for="(item, k) in bests" :key="k" v-bind="item" />
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import shopItem from "components/ShopItem.vue";

const bests = ref([
  {
    title: "test1",
    link: "best1.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "test2",
    link: "best2.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "test3",
    link: "best3.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "test4",
    link: "best1.jpeg",
    currency: "TWD",
    price: "500",
  },
]);
</script>
