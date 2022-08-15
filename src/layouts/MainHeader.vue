<template>
  <q-header class="bg-yellow-400 text-black px-4 py-2 border-b-1 border-gray-300">
    <q-toolbar class="px-0">
      <q-btn class="md:hidden" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title shrink class="p-0 absolute-center md:(static transform-none)">
        <q-item clickable :to="{ name: 'homes.index' }" class="logo">
          <img src="logo.png" class="w-22 md:w-24" />
        </q-item>
      </q-toolbar-title>

      <q-list flat class="hidden mr-auto text-uppercase text-md font-medium md:flex">
        <q-item v-for="(item, k) in linksList" :key="k" flat dense clickable class="items-center px-6"
          :to="{ name: item.link }">
          {{ item.title }}
        </q-item>
      </q-list>

      <q-btn-group flat class="ml-auto items-center justify-center gap-x-1">
        <div v-if="!user" class="flex gap-x-1 items-center justify-center hidden md:flex">
          <q-btn flat dense label="login" :to="{ name: 'login.index' }" class="text-sm" />
          <span>/</span>
          <q-btn flat dense label="signup" :to="{ name: 'register.index' }" class="text-sm" />
          <span>/</span>
        </div>
        <div v-else class="flex gap-x-1 items-center justify-center">
          <div class="hidden md:flex">
            <q-btn flat dense label="logout" class="text-sm" @click="logout()" />
            <span>/</span>
          </div>
          <q-btn flat dense icon="person" :to="{ name: 'accounts.index' }" class="text-sm" />
          <span>/</span>
        </div>
        <q-btn flat round dense icon="shopping_cart" class="text-sm" />
        <span>/</span>
        <q-btn flat round dense icon="search" class="text-sm" />
        <span class="hidden md:flex">/</span>
        <q-btn-dropdown flat dense class="hidden md:flex">
          <template v-slot:label>
            <q-avatar icon="svguse:icons/lang.svg#en_us" class="h-5 w-5 rounded-full" />
          </template>
          <q-list>
            <q-item v-for="item in langList" :key="item.icon" clickable v-close-popup tabindex="0"
              class="hover:bg-yellow-400">
              <q-item-section side>
                <q-avatar :icon="`svguse:icons/lang.svg#${item.icon}`" class="h-5 w-5 rounded-full" />
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
      <q-item v-if="!user" clickable :to="{ name: 'login.index' }" class="bg-black text-white mt-auto" v-ripple>
        <q-item-section>Login</q-item-section>
      </q-item>
      <q-item v-else clickable class="bg-black text-white mt-auto" @click="logout" v-ripple>
        <q-item-section>Logout</q-item-section>
      </q-item>
      <q-item clickable :to="{ name: item.link }" v-for="item in linksList" :key="item.title"
        class="border-b-1 border-gray-300">
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
      </q-item>
      <div class="fixed bottom-0 w-full">
        <q-expansion-item group="languages">
          <template v-slot:header>
            <q-item-section side>
              <q-avatar icon="svguse:icons/lang.svg#en_us" class="h-5 w-5 rounded-full" />
            </q-item-section>
            <q-item-section no-wrap>
              <q-item-label>English (US)</q-item-label>
            </q-item-section>
          </template>
          <q-item v-for="item in langList" :key="item.icon" clickable>
            <q-item-section side>
              <q-avatar :icon="`svguse:icons/lang.svg#${item.icon}`" class="h-5 w-5 rounded-full" />
            </q-item-section>
            <q-item-section no-wrap>
              <q-item-label>{{ item.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </div>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from 'stores/auth';

const store = useAuthStore();
const user = computed(() => store.user);

const linksList = ref([
  {
    title: "Best",
    icon: "school",
    link: "bests.index",
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
]);
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

function logout() {
  store.logout();
}

</script>

<style scoped lang="scss">
.q-avatar.h-5.w-5 :deep(.q-icon) {
  width: 100%;
  height: 100%;
}

.logo {
  border: none;
}

@media (min-width: 768px) {
  .md\:flex {
    display: flex !important;
  }
}
</style>