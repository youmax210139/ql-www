<template>
  <!-- PC -->
  <q-header class="bg-yellow-400 text-black px-4 py-2 border-b-1 border-gray-300">
    <q-toolbar class="px-0">
      <q-btn class="md:hidden" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
      <q-toolbar-title shrink class="p-0 absolute-center md:(static transform-none)">
        <q-item clickable :to="{ name: 'homes.index' }" class="logo">
          <img src="logo.png" class="w-22 md:w-24" />
        </q-item>
      </q-toolbar-title>

      <q-list flat class="hidden mr-auto text-capitalize text-md font-medium md:(flex)">
        <template v-for="(item, k) in linksList" :key="k">
          <q-item v-if="!item.children" flat dense clickable class="items-center px-6" :to="item.link">
            {{ item.title }}
          </q-item>
          <q-menu-hover v-else>
            <template #default="{ activatorAttr, menuAttr }">
              <q-item flat dense clickable class="items-center px-6" v-bind="activatorAttr">
                {{ item.title }}
                <q-menu v-model="item.open" anchor="bottom left" self="top left" fit class="text-center"
                  v-bind="menuAttr">
                  <q-item v-for="child in item.children" :key="child.id" clickable class="px-6 hover:bg-yellow-400"
                    :to="child.link">
                    <q-item-section>{{ child.name }}</q-item-section>
                  </q-item>
                </q-menu>
              </q-item>
            </template>
          </q-menu-hover>
        </template>
      </q-list>

      <q-btn-group flat class="ml-auto items-center justify-center gap-x-1">
        <div v-if="!user" class="flex gap-x-1 items-center justify-center hidden md:flex">
          <q-btn flat dense no-caps label="login" :to="{ name: 'login.index' }" class="text-sm text-capitalize" />
          <span>/</span>
          <q-btn flat dense no-caps label="signup" :to="{ name: 'register.agree' }" class="text-sm text-capitalize" />
          <span>/</span>
        </div>
        <div v-else class="flex gap-x-1 items-center justify-center">
          <div class="hidden md:(flex items-center justify-center)">
            <q-btn flat dense no-caps label="logout" class="text-sm text-capitalize mr-1" @click="logout()" />
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
  <!-- mobile -->
  <q-drawer class="md:hidden" v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item v-if="!user" clickable :to="{ name: 'login.index' }" class="bg-black text-white mt-auto text-capitalize"
        v-ripple>
        <q-item-section>Login</q-item-section>
      </q-item>
      <q-item v-else clickable class="bg-black text-white mt-auto text-capitalize" @click="logout()" v-ripple>
        <q-item-section>Logout</q-item-section>
      </q-item>
      <template v-for="item in linksList" :key="item.title">
        <q-item v-if="!item.children" clickable :to="item.link" class="border-b-1 border-gray-300">
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item v-else :group="item.title" :label="item.title">
          <q-item v-for="child in item.children" :key="child.id" clickable :to="child.link">
            <q-item-section no-wrap>
              <q-item-label>{{ child.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </template>
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
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from 'stores/auth';
import { useCategoryStore } from 'stores/category';
import QMenuHover from "components/QMenuHover.vue"

const authStore = useAuthStore();
const categoryStore = useCategoryStore();
const user = computed(() => authStore.user);
const categories = computed(() => categoryStore.categories);
categoryStore.index();

const linksList = computed(() => [
  {
    title: "BEST",
    icon: "school",
    link: { name: "bests.index" },
  },
  {
    title: "Category",
    icon: "record_voice_over",
    children: categories.value.map(v => {
      return {
        ...v,
        link: { name: "categories.index", params: { category: v.name } }
      }
    }),
    open: false,
    listOver: false
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
  authStore.logout();
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