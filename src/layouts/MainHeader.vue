<template>
  <q-header class="bg-yellow-400 text-black py-3 md:p-4">
    <q-toolbar class="md:px-0">
      <q-btn
        class="md:hidden"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />
      <q-toolbar-title shrink>
        <a href="/">
          <img src="logo.png" class="w-14 md:w-20" />
        </a>
      </q-toolbar-title>

      <q-btn-group flat class="hidden md:flex mr-auto">
        <q-btn
          v-for="(item, k) in linksList"
          :key="k"
          flat
          class="text-md font-medium"
          :label="item.title"
          :to="{ name: item.link }"
        />
      </q-btn-group>
      <q-btn-group flat class="ml-auto">
        <q-btn flat dense icon="person" to="#" class="text-sm" />
        /
        <q-btn flat round dense icon="shopping_cart" class="text-sm" />
        /
        <q-btn flat round dense icon="search" class="text-sm" />
        /
        <q-btn-dropdown flat dense>
          <template v-slot:label>
            <q-avatar
              icon="svguse:icons/lang.svg#en_us"
              class="h-5 w-5 rounded-full"
            />
          </template>
          <q-list>
            <q-item
              v-for="item in langList"
              :key="item.icon"
              clickable
              v-close-popup
              tabindex="0"
            >
              <q-item-section side>
                <q-avatar
                  :icon="`svguse:icons/lang.svg#${item.icon}`"
                  class="h-5 w-5 rounded-full"
                />
              </q-item-section>
              <q-item-section no-wrap>
                <q-item-label>{{ item.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-btn-group>
    </q-toolbar>
  </q-header>

  <q-drawer class="md:hidden" v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Best",
    icon: "school",
    link: "bests.index",
  },
  {
    title: "Express",
    icon: "chat",
    link: "express.index",
  },
  {
    title: "Model",
    icon: "record_voice_over",
    link: "models.index",
  },
  {
    title: "Q&A",
    icon: "record_voice_over",
    link: "qanda.index",
  },
];

const essentialLinks = ref(linksList);
const leftDrawerOpen = ref(false);
const langList = ref([
  {
    title: "English (US)",
    icon: "en_us",
  },
  {
    title: "中文 (繁體)",
    icon: "zh_tw",
  },
]);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped lang="scss">
.q-avatar.h-5.w-5 :deep(.q-icon) {
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
  .md\:flex {
    display: flex !important;
  }
}
</style>