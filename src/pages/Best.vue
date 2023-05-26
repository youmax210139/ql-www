<template>
  <q-page class="container justify-center mx-auto my-4 md:my-8">
    <q-list
      class="grid grid-cols-1 gap-x-3 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
    >
      <shop-item v-for="(item, k) in bests" :key="k" v-bind="item" />
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import shopItem from "components/ShopItem.vue";

const bests = ref([
  {
    title: "JPSC-001",
    link: "best01.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "JPSC-002",
    link: "best02.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "JPSC-003",
    link: "best03.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "KAPP-001",
    link: "best05.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "KAPP-002",
    link: "best06.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "KAPP-003",
    link: "best07.jpeg",
    currency: "TWD",
    price: "500",
  },
  {
    title: "KAPP-004",
    link: "best08.jpeg",
    currency: "TWD",
    price: "500",
  },
]);
</script>
