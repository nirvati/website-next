<template>
  <div class="rounded-lg overflow-hidden">
    <NuxtImg :src="src" :alt="alt" class="w-full object-cover" />
    <div class="px-6 py-4">
      <div class="font-semibold text-2xl mb-2 text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>
