<template>
  <div>
    <div class="flex flex-col items-center justify-center w-full p-4">
      <h1 class="text-3xl font-bold mb-2">{{ t("install.hardware.title") }}</h1>
      <p class="mb-4">{{ t("install.hardware.description") }}</p>
      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div
          v-for="hw in supportedHw"
          :key="hw.id"
          class="mb-4 flex items-center justify-center flex-col cursor-pointer transition-colors"
          :class="{
            'bg-sky-100 dark:bg-neutral-800 rounded-lg p-4 hover:bg-sky-200 dark:hover:bg-neutral-700':
              selectedHw !== hw.id,
            'bg-sky-200 dark:bg-neutral-700 rounded-lg p-4':
              selectedHw === hw.id,
          }"
          @click="
            selectedHw = hw.id;
            scrollToSection('disk');
          "
        >
          <img
            :src="hw.image"
            :alt="t(`install.hardware.options.${hw.id}`)"
            class="max-h-48 max-w-48 mb-2"
          />
          <h2 class="text-lg font-semibold">
            {{ t(`install.hardware.options.${hw.id}`) }}
          </h2>
        </div>
      </div>
    </div>
    <!--<div
      v-if="selectedHw"
      class="flex flex-col items-center justify-center w-full p-4"
      id="base"
    >
      <h1 class="text-3xl font-bold mb-2">
        {{ t("install.base.title") }}
      </h1>
      <p>{{ t("install.base.description") }}</p>
      <p class="italic mb-4">
        {{ t("install.settings-hint") }}
      </p>
      <div class="grid lg:grid-cols-3 gap-4">
        <div
          v-for="base in supportedBases"
          :key="base.id"
          class="mb-4 flex items-center justify-center flex-col transition-colors"
          :class="{
            'cursor-pointer bg-sky-100 dark:bg-neutral-800 rounded-lg p-4 hover:bg-sky-200 dark:hover:bg-neutral-700':
              selectedBase !== base.id && !base.todo,
            'cursor-pointer bg-sky-200 dark:bg-neutral-700 rounded-lg p-4':
              selectedBase === base.id,
            'bg-neutral-50 dark:bg-neutral-950 rounded-lg p-4 cursor-not-allowed':
              base.todo,
          }"
          @click="
            !base.todo && (selectedBase = base.id);
            scrollToSection('disk');
          "
        >
          <UBadge v-if="base.todo" color="warning" class="mb-2">
            {{ t("install.base.todo") }}
          </UBadge>
          <UColorModeImage
            :dark="base.image.dark"
            :light="base.image.light"
            :alt="t(`install.base.options.${base.id}.label`)"
            class="max-h-48 max-w-48 mb-2"
          />
          <h2 class="text-lg font-semibold">
            {{ t(`install.base.options.${base.id}.label`) }}
          </h2>
          <p class="max-w-md text-center">
            {{ t(`install.base.options.${base.id}.description`) }}
          </p>
        </div>
      </div>
      <span class="text-muted text-sm">
        {{ t("install.base.disclaimer") }}
      </span>
    </div>-->
    <!--<div
      v-if="selectedHw && selectedBase"
      class="flex flex-col items-center justify-center w-full p-4"
    >
      <h1 id="storage" class="text-3xl font-bold mb-2">
        {{ t("install.storage.title") }}
      </h1>
      <p>{{ t("install.storage.description") }}</p>
      <p class="italic mb-4">
        {{ t("install.settings-hint") }}
      </p>
      <div class="grid lg:grid-cols-2 gap-4">
        <div
          v-for="storage in supportedStorage"
          :key="storage.id"
          class="mb-4 flex items-center justify-center flex-col cursor-pointer transition-colors"
          :class="{
            'bg-sky-100 dark:bg-neutral-800 rounded-lg p-4 hover:bg-sky-200 dark:hover:bg-neutral-700':
              selectedStorage !== storage.id,
            'bg-sky-200 dark:bg-neutral-700 rounded-lg p-4':
              selectedStorage === storage.id,
          }"
          @click="
            selectedStorage = storage.id;
            scrollToSection('disk');
          "
        >
          <UColorModeImage
            v-if="storage.image"
            :dark="storage.image.dark"
            :light="storage.image.light"
            :alt="t(`install.storage.options.${storage.id}.label`)"
            class="max-h-48 max-w-48 mb-2"
          />
          <h2 class="text-lg font-semibold">
            {{ t(`install.storage.options.${storage.id}.label`) }}
          </h2>
          <p class="max-w-md text-center">
            {{ t(`install.storage.options.${storage.id}.description`) }}
          </p>
        </div>
      </div>
      <span class="text-muted text-sm">
        {{ t("install.storage.disclaimer") }}
      </span>
    </div>-->
    <div
      v-if="selectedHw && selectedBase && selectedStorage"
      id="disk"
      class="flex flex-col items-center justify-center w-full p-4"
    >
      <h1 class="text-3xl font-bold mb-2">
        {{ t("install.disk.title") }}
      </h1>
      <p class="mb-4">{{ t("install.disk.description") }}</p>
      <div class="grid lg:grid-cols-2 gap-4">
        <div
          v-for="disk in supportedDisks"
          :key="disk.id"
          class="mb-4 flex items-center justify-center flex-col cursor-pointer transition-colors"
          :class="{
            'bg-sky-100 dark:bg-neutral-800 rounded-lg p-4 hover:bg-sky-200 dark:hover:bg-neutral-700':
              chosenDisk !== disk.id,
            'bg-sky-200 dark:bg-neutral-700 rounded-lg p-4':
              chosenDisk === disk.id,
          }"
          @click="
            chosenDisk = disk.id;
            scrollToSection('download');
          "
        >
          <UColorModeImage
            v-if="disk.image"
            :dark="disk.image.dark"
            :light="disk.image.light"
            :alt="t(`install.disk.options.${disk.id}.label`)"
            class="max-h-48 max-w-48 mb-2"
          />
          <h2 class="text-lg font-semibold">
            {{ t(`install.disk.options.${disk.id}.label`) }}
          </h2>
          <p class="max-w-md text-center">
            {{ t(`install.disk.options.${disk.id}.description`) }}
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="selectedHw && selectedBase && selectedStorage && chosenDisk"
      id="download"
      class="flex flex-col items-center justify-center w-full p-4"
    >
      <h1 class="text-3xl font-bold mb-2">
        {{ t("install.download.title") }}
      </h1>
      <p>{{ t("install.download.description") }}</p>
      <p class="italic mb-4">
        {{ t("install.download.final-note") }}
      </p>
      <NuxtLink
        :to="`https://os-cdn.nirvati.de/images/nirvati-${selectedHw}-current-${selectedBase}-${selectedStorage}-${chosenDisk}-main-f6cac43.img.xz`"
      >
        <UButton size="xl">{{ t("install.download.button") }}</UButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UColorModeImage } from "#components";

const supportedHw: {
  id: "rpi4b" | "uefi-x86" | "rock-5-cm-rpi-cm4-io" | "uefi-arm64";
  image: string;
}[] = [
  {
    id: "rpi4b",
    image: "/download-selector/rpi.svg",
  },
  {
    id: "rock-5-cm-rpi-cm4-io",
    image: "/download-selector/radxa_cm5.webp",
  },
  {
    id: "uefi-x86",
    image: "/download-selector/uefi-x86.svg",
  },
  {
    id: "uefi-arm64",
    image: "/download-selector/uefi-arm64.svg",
  }
];

const { t } = useI18n();

const selectedHw = ref<null | "rpi4b" | "rock-5-cm-rpi-cm4-io" | "uefi-x86" | "uefi-arm64">(null);
const selectedBase = ref<null | "k3s" | "micro" | "rke2">("k3s");
const selectedStorage = ref<null | "localpath" | "longhorn">(
  "longhorn"
);
const supportedBases: {
  id: "k3s" | "micro" | "rke2";
  image: {
    dark: string;
    light: string;
  };
  todo?: boolean;
}[] = [
  {
    id: "k3s",
    image: {
      dark: "/download-selector/k3s-white.svg",
      light: "/download-selector/k3s.svg",
    },
  },
  {
    id: "micro",
    image: {
      dark: "/download-selector/nirvati-micro.svg",
      light: "/download-selector/nirvati-micro.svg",
    },
    todo: true,
  },
  {
    id: "rke2",
    image: {
      dark: "/download-selector/rke2-white.svg",
      light: "/download-selector/rke2.svg",
    },
    todo: true,
  },
];

const supportedStorage: {
  id: "localpath" | "longhorn";
  image?: {
    dark: string;
    light: string;
  };
}[] = [
  {
    id: "localpath",
  },
  {
    id: "longhorn",
  },
];

const chosenDisk = ref<null | "internal" | "external">(null);
const supportedDisks: {
  id: "internal" | "external";
  image?: {
    dark: string;
    light: string;
  };
}[] = [
  {
    id: "internal",
  },
  {
    id: "external",
  },
];

async function scrollToSection(section: string) {
  await nextTick();
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
}
</script>
