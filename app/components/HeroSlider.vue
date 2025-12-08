<template>
  <UCarousel v-slot="{ item, index }" :items="items" loop dots :autoplay="!!props.delay && { delay: Number(props.delay) }" :duration="40">
    <div class="relative">
      <NuxtImg :src="item" class="object-cover w-full min-h-[90vh] max-h-[95vh]" />
      <div class="absolute inset-0 flex items-center p-4 lg:p-12 text-center">
        <slot :name="`item-${index + 1}`" />
      </div>
    </div>
  </UCarousel>
</template>

<script setup lang="ts">
const items = [
  "/hero/hero_image_nirvati_OS.jpg",
  "/hero/hero_image_citadel_OS.jpg",
  "/hero/hero_image_luxdis_OS.jpg",
];

const props = defineProps<{
  delay?: number;
}>();
</script>
