<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>

<style>
:root {
  scroll-behavior: smooth;
}

body {
  @apply bg-[#ede2d3] dark:bg-default;
}

@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --color-nirvati-brand: #800080;
  --color-nirvati-50:  #faf5fa;
  --color-nirvati-100: #f4e6f4;
  --color-nirvati-200: #e6c7e6;
  --color-nirvati-300: #d7a3d7;
  --color-nirvati-400: #b305b3;
  --color-nirvati-500: #800080;
  --color-nirvati-600: #6f006f;
  --color-nirvati-700: #5c005c;
  --color-nirvati-800: #470047;
  --color-nirvati-900: #2f002f;
  --color-nirvati-950: #1d001d;
}

@source "../content/**/*.md";

.nirvati-leading-10 p {
  --tw-leading: calc(var(--spacing) * 10);
  line-height: calc(var(--spacing) * 10);
}

/* Fix for iOS < 18 not supporting backdrop-blur utility */
@layer utilities {
  .backdrop-blur {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
}

</style>
