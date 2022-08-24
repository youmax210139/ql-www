<template>
  <q-page class="container justify-center mx-auto my-4 px-2 md:(my-8 px-0)">
    <div class="grid grid-cols-6">
      <div class="col-span-6 sm:(col-span-1)">
        <q-tabs v-model="tab" :vertical="$q.screen.gt.xs" active-class="text-decoration-line">
          <q-tab v-for="item in tabList" :key="item.link" :name="item.link" :label="item.title" />
        </q-tabs>
      </div>
      <div class="col-span-6 sm:(col-span-5)">
        <q-card class="mb-4 md:(p-4)">
          <q-item>
            <q-item-section avatar>
              <q-avatar class="h-24 w-24">
                <img src="default_profile.png" alt="avatar">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1" class="text-h4 q-mb-md">您好,{{ store.user.name }}</q-item-label>
              <q-item-label class="text-base" caption lines="2">
                您的信箱，{{ store.user.email }}<br />
                -- Beginner。
              </q-item-label>
            </q-item-section>
            <q-separator vertical />
            <q-item-section class="justify-center !items-center !text-center md:(min-w-20)" side>
              <p>積分</p>
              <p class="text-h5 font-bold mt-4">0</p>
            </q-item-section>
          </q-item>
        </q-card>

        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up"
          class="bg-inherit">
          <q-tab-panel name="order">
            <div class="text-h4 q-mb-md justify-start items-center flex">訂單
              <q-badge class="color-gray-700 text-white h-6 w-6 justify-center items-center ml-3" label="0" rounded />
            </div>
          </q-tab-panel>

          <q-tab-panel name="collection">
            <div class="text-h4 q-mb-md justify-start items-center flex">收藏
              <q-badge class="color-gray-700 text-white h-6 w-6 justify-center items-center ml-3" label="0" rounded />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from 'stores/auth';

const store = useAuthStore();
const tab = ref('order');
const tabList = [
  {
    title: "訂單查詢",
    link: "order",
  },
  {
    title: "我的收藏",
    link: "collection",
  },
];
</script>

<style scoped lang="scss">
.container :deep(.q-tab.text-decoration-line) {
  .q-tab__content {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  .q-tab__indicator {
    display: none;
  }
}
</style>