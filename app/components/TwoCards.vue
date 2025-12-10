<template>
  <div
    class="flex flex-col gap-4"
    :class="textPosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'"
  >
    <div class="w-full lg:w-3/4">
      <slot name="card-big"></slot>
    </div>
    <div
      class="w-full lg:w-1/4 flex items-center justify-center lg:self-stretch"
    >
      <div
        class="p-4 rounded-xl w-full h-full text-center flex items-center justify-center"
        :class="smallCardClass"
      >
        <slot name="card-small"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ textPosition?: "left" | "right"; smallCardClass?: string }>();
</script>
