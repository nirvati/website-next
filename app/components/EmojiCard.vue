<template>
  <div class="rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-700">
    <div class="my-8 flex items-center justify-center text-center">
      <span class="text-6xl">{{ emoji }}</span>
    </div>
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
  emoji: string;
  title: string;
}>();
</script>
