<template>
  <q-page class="container mx-auto">
    <h4 class="text-center text-2xl mt-8 mb-4 text-gray-700 md:(mt-12)">
      Login
    </h4>
    <q-form method="post" @submit.prevent="onSubmit" class="grid gap-y-4 p-4 max-w-md mx-auto">
      <q-input outlined v-model="form.username" label="Username" bg-color="white" />
      <q-input outlined v-model="form.password" label="Password" bg-color="white" />
      <q-checkbox v-model="form.remember_me" label="Remember me" />
      <q-btn label="Signin" class="w-full py-4 bg-white" />
      <div class="flex justify-between">
        <q-btn flat label="註冊" class="py-4" />
        <q-btn flat label="忘記密碼" class="py-4" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const form = ref({
  username: "",
  password: "",
  remember_me: false,
});
</script>
