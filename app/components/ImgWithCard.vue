<template>
  <TwoCards :small-card-class="cardClass" :text-position="textPosition">
    <template #card-big>
      <NuxtImg
        :src="src"
        :alt="alt"
        class="object-cover rounded-lg w-full"
      />
    </template>

    <template #card-small>
      <div class="font-semibold text-4xl nirvati-leading-10">
        <slot></slot>
      </div>
    </template>
  </TwoCards>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
  textPosition?: "left" | "right";
  cardClass?: string;
}>();
</script>
