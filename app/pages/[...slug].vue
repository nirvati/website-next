<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.key">
          <Link
            :id="link.key"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.key">
          <Meta
            :id="meta.key"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <UHeader
          :class="{
            'fixed w-full': page?.startBehindNav,
            'bg-default/10 border-transparent': isAtTop && page?.startBehindNav,
          }"
          class="transition-border duration-500"
        >
          <template #title>
            <NirvatiLogo class="h-16 w-auto" with-wordmark :class="{
              'dark:text-white': !isAtTop || !page?.startBehindNav,
            }" />
          </template>

          <UNavigationMenu
            :items="items"
            :ui="{
              linkLabel:
                isAtTop && page?.startBehindNav ? 'dark:text-white' : '',
              linkTrailingIcon:
                isAtTop && page?.startBehindNav ? 'dark:text-white' : '',
            }"
          />

          <template #body>
            <UNavigationMenu
              :items="items"
              orientation="vertical"
              class="-mx-2.5"
            />
            <UButton
              color="primary"
              variant="solid"
              to="/contribute"
              class="mt-4"
              >{{ t("navigation.contribute") }}</UButton
            >
          </template>

          <template #right>
            <UColorModeButton />

            <UTooltip text="Visit us on GitLab" :kbds="['meta', 'G']">
              <UButton
                color="neutral"
                variant="ghost"
                to="https://gitlab.com/nirvati-ug"
                target="_blank"
                icon="i-simple-icons-gitlab"
                aria-label="GitLab"
              />
            </UTooltip>
            <UButton
              color="primary"
              variant="solid"
              to="/contribute"
              class="hidden lg:block"
              >{{ t("navigation.contribute") }}</UButton
            >
          </template>
        </UHeader>

        <UMain>
          <UContainer class="py-8" v-if="!page?.startBehindNav">
            <UPageHeader
              :title="page.title"
              :description="page.description"
              v-if="page?.path.startsWith('/blog/')"
            >
              <template #headline>
                <UBadge :label="page.badge" variant="subtle" />
                <span class="text-muted">&middot;</span>
                <time class="text-muted" v-if="page.date">{{
                  new Date(page.date).toLocaleDateString("en", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                }}</time>
              </template>

              <div class="flex flex-wrap items-center gap-3 mt-4">
                <UButton
                  v-for="(author, index) in page.authors"
                  :key="index"
                  color="neutral"
                  variant="subtle"
                  target="_blank"
                  size="sm"
                >
                  {{ author.name }}
                </UButton>
              </div>
            </UPageHeader>
            <ContentRenderer v-if="page" :value="page" />
            <div v-else>
              <h1>Page not found</h1>
              <p>This page doesn't exist.</p>
            </div>
          </UContainer>
          <div v-else-if="page">
            <ContentRenderer :value="page" />
          </div>
        </UMain>

        <UFooter>
          <template #left>
            <div class="flex items-center gap-2 justify-center flex-col md:flex-row">
              <a href="https://1tickle.xyz" class="font-bold text-sm"
                >Designed by 1tickle</a
              >
              <span class="text-muted hidden md:block">&mdash;</span>
              <p class="text-muted text-sm">
                Copyright © {{ new Date().getFullYear() }} Nirvati UG
                (haftungsbeschränkt).
              </p>
            </div>
          </template>
          <template #right>
            <NuxtLink to="/imprint" class="text-muted text-sm">
              {{ t("navigation.imprint") }}
            </NuxtLink>
            <NuxtLink to="/privacy-policy" class="text-muted text-sm ml-4">
              {{ t("navigation.privacy-policy") }}
            </NuxtLink>
            <NuxtLink to="/security" class="text-muted text-sm ml-4">
              {{ t("navigation.security-report") }}
            </NuxtLink>
          </template>
        </UFooter>
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const route = useRoute();
const { t, locale } = useI18n();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("navigation.install"),
    to: "/install",
  },
  {
    label: t("navigation.hardware"),
    to: "/hardware",
  },
  {
    label: t("navigation.support"),
    to: "/support",
  },
  {
    label: t("navigation.about-us.title"),
    children: [
      {
        label: t("navigation.blog"),
        to: "/blog",
        active: route.path.startsWith("/blog"),
      },
      {
        label: t("navigation.about-us.team"),
        to: "/team",
      },
      {
        label: t("navigation.about-us.philosophy"),
        to: "/philosophy",
      },
      /*{
        label: t("navigation.about-us.contact"),
        to: "/contact",
      },*/
    ],
  },
]);

const head = useLocaleHead({ seo: true });

const slug = computed(() =>
  withLeadingSlash(
    Array.isArray(route.params.slug)
      ? route.params.slug.join("/")
      : String(route.params.slug)
  )
);

const { data: page } = await useAsyncData(
  "page-" + slug.value,
  async () => {
    // Build collection name based on current locale
    const collection = ("content_" + locale.value) as keyof Collections;
    const content = await queryCollection(collection).path(slug.value).first();

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== "en") {
      return await queryCollection("content_en").path(slug.value).first();
    }

    return content;
  },
  {
    watch: [locale], // Refetch when locale changes
  }
);

// Track scroll position for header transparency
const isAtTop = ref(true);

const handleScroll = () => {
  isAtTop.value = window.scrollY < 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial position
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
})
</script>
