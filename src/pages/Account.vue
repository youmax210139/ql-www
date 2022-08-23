<template>
  <q-page class="container justify-center mx-auto my-4 md:my-8">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
          </q-avatar>
        </q-item-section>
        <q-item>
          {{ store.user.name }}
          {{ store.user.email }}
        </q-item>
      </q-item>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from 'stores/auth';

const store = useAuthStore();
</script>
