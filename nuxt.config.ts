// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-studio",
    "@nuxt/scripts"
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  content: {
    experimental: { nativeSqlite: true },
  },
  compatibilityDate: "2024-04-03",
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
        dir: "ltr",
        file: "en.json",
        domain: "dev.nirvati.eu",
      },
      {
        code: "de",
        name: "German",
        language: "de-DE",
        dir: "ltr",
        file: "de.json",
        domain: "dev.nirvati.de",
      },
      {
        code: "fr",
        name: "French",
        language: "fr-FR",
        dir: "ltr",
        file: "fr.json",
        domain: "dev.nirvati.fr",
      },
    ],
    detectBrowserLanguage: false,
    differentDomains: true,
    defaultLocale: "en",
  },
  studio: {
    repository: {
      provider: 'github',
      owner: 'nirvati',
      repo: 'website-next',
      branch: 'main',
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2024'
      }
    },
  },
});