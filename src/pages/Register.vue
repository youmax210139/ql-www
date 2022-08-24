<template>
  <q-page class="container mx-auto">
    <h4 class="text-center text-2xl mt-8 mb-4 text-gray-700 md:(mt-12)">
      Register
    </h4>
    <q-form method="post" @submit.prevent="register()" class="grid gap-y-4 p-4 max-w-md mx-auto" ref="form$">
      <q-input outlined label="Name" v-model="form.name" bg-color="white" lazy-rules :rules="[
        $rules.required('Name is required'),
      ]" />

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
      <q-input :type="isPwdC ? 'password' : 'text'" outlined v-model="form.password_confirmation" label="Password"
        bg-color="white" lazy-rules :rules="[
          $rules.required('password is required'),
          $rules.sameAs(form.password, 'Confirm Password should be same as password field'),
        ]">
        <template v-slot:append>
          <q-icon :name="isPwdC ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwdC = !isPwdC" />
        </template>
      </q-input>
      <div class="flex justify-center my-2">
        <q-btn outline label="取消" @click="$router.go(-1)" class="py-2 border-1 border-gray-500 mr-4" />
        <q-btn type="submit" flat label="註冊" class="py-2 px-4 text-white bg-gray-700" />
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
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const isPwd = ref(true);
const isPwdC = ref(true);

function register() {
  form$.value.validate();
  store.register(form.value);
}
</script>
