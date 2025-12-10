<template>
  <UMarquee
    :repeat="2"
    :ui="{
      root: '[--duration:50s]',
    }"
    class="text-left"
  >
    <div
      v-for="(entry, index) in randomizedAppStoreEntries"
      :key="index"
      class="flex flex-col items-center justify-center"
    >
      <UColorModeImage
        :light="entry.icon"
        :dark="entry.icon"
        :alt="entry.name[locale] || entry.name['en']"
        aria-hidden
        class="size-26 rounded-lg mb-2"
      />
      <div>
        <span class="text-lg font-semibold">{{
          entry.name[locale] || entry.name["en"]
        }}</span>
      </div>
    </div>
  </UMarquee>
</template>

<script setup lang="ts">
import appStoreEntries from "../data/app-store-ai";
const { locale } = useI18n();

function shuffleArray<T>(array: T[]): T[] {
  return array.toSorted(() => Math.random() - 0.5);
}

const { data: randomizedAppStoreEntries } = await useAsyncData(useId(), async () => {
  // Simulate fetching data from an API or database
  return shuffleArray(appStoreEntries);
});
</script>
