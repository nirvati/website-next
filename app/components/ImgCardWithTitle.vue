<template>
  <div class="rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-700">
    <NuxtImg :src="src" :alt="alt" class="w-full object-cover" />
    <div class="px-6">
      <div class="font-semibold text-3xl mb-2 text-center">
        {{ title }}
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  title: string;
}>();
</script>
