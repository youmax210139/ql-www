<template>
  <q-page class="container mx-auto">
    <h4 class="text-center text-2xl mt-8 mb-4 text-gray-700 md:(mt-12)">
      Register
    </h4>
    <q-form method="post" @submit.prevent="register()" class="grid gap-y-4 p-4 mx-auto" ref="form$">
      <div class="flex justify-center my-2">
        <q-btn outline label="取消" @click="$router.go(-1)" class="py-2 border-1 border-gray-500 mr-4" />
        <q-btn flat label="註冊" class="py-2 px-4 text-white bg-gray-700" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from 'stores/auth';

const store = useAuthStore();

const form$ = ref(null);
const form = ref({
  agree_all: false,
  agree_1: false,
  agree_2: false,
  username: "",
  password: "",
  remember_me: false,
});
const isPwd = ref(true);

</script>
