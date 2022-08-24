<template>
  <q-layout view="hHh lpr fff" class="bg-yellow-400">
    <main-header />
    <q-page-container class="md:(pl-0)">
      <router-view />
    </q-page-container>
    <main-footer />
  </q-layout>
</template>

<script setup>
import mainHeader from "layouts/MainHeader.vue";
import mainFooter from "layouts/MainFooter.vue";
</script>
<style scoped lang="scss">
@media (min-width: 768px) {
  .md\:pl-0 {
    padding-left: 0px !important;
  }
}
</style>