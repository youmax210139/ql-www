<template>
  <q-page class="container mx-auto">
    <h4 class="text-center text-2xl mt-8 mb-4 text-gray-700 md:(mt-12)">
      Login
    </h4>
    <q-form method="post" @submit.prevent="login()" class="grid gap-y-4 p-4 max-w-md mx-auto" ref="form$">
      <q-input outlined v-model="form.email" label="Email" bg-color="white" lazy-rules :rules="[
        $rules.required('email is required'),
        $rules.email('should be email format'),
      ]" />
      <q-input :type="isPwd ? 'password' : 'text'" outlined v-model="form.password" label="Password" bg-color="white"
        lazy-rules :rules="[
          $rules.required('password is required'),
          $rules.minLength(6, 'Your name should have at least 6 letters'),
          $rules.maxLength(15, 'Your name should not be larger than 10 letters')
        ]">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <q-checkbox v-model="form.remember" label="Remember me" />
      <q-btn label="登入" type="submit" class="w-full py-4 bg-white" />
      <div class="flex justify-between">
        <q-btn flat label="註冊" :to="{ name: 'register.agree' }" class="py-4" />
        <q-btn flat label="忘記密碼" class="py-4" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from 'quasar'
import { useAuthStore } from 'stores/auth';

const $q = useQuasar()
const store = useAuthStore();

const form$ = ref(null);
const form = ref({
  email: "",
  password: "",
  remember: false,
  device_name: $q.platform.is.platform
});
const isPwd = ref(true);

function login() {
  form$.value.validate();
  store.login(form.value);
}
</script>
