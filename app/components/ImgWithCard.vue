<template>
  <div
    class="flex flex-col gap-4"
    :class="textPosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'"
  >
    <NuxtImg
      :src="src"
      :alt="alt"
      class="w-full lg:w-3/4 object-cover rounded-lg"
    />
    <div class="w-full lg:w-1/4 flex items-center justify-center lg:self-stretch">
      <div
        class="bg-black text-white p-4 rounded-lg w-full h-full text-center flex items-center justify-center"
      >
        <div class="font-semibold text-3xl"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt: string; textPosition?: "left" | "right" }>();
</script>
