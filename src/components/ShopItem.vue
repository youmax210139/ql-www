<template>
  <div class="group relative">
    <div
      class="
        w-full
        min-h-80
        bg-gray-200
        aspect-w-1 aspect-h-1
        rounded-md
        overflow-hidden
        group-hover:opacity-75
        md:(aspect-none)
      "
    >
      <img
        :src="link"
        alt="Front of men&#039;s Basic Tee in black."
        class="w-full object-center object-cover md:(h-full)"
      />
    </div>
    <div class="text-center text-sm">
      <a href="#">
        <h4 class="text-gray-600">{{ title }}</h4>
      </a>
      <p class="font-medium text-gray-700">{{ currency }}${{ price }}</p>
      <div class="mt-4">
        <q-btn flat icon="favorite" label="0" size="16px" />
        <q-btn flat icon="shopping_cart" size="16px" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "link", "price", "currency"]);
</script>
