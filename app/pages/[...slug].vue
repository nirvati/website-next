<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
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
            'bg-default/10 border-transparent': isAtTop,
          }"
          class="transition-border duration-500"
        >
          <template #title>
            <NirvatiLogo class="h-16 w-auto" with-wordmark />
          </template>

          <UNavigationMenu
            :items="items"
            :ui="{
              linkLabel: isAtTop ? 'dark:text-white' : '',
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
              to="/support-us"
              class="mt-4"
              >{{ t("navigation.support-us") }}</UButton
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
              to="/support-us"
              class="hidden lg:block"
              >{{ t("navigation.support-us") }}</UButton
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
            <p class="text-muted text-sm">
              Copyright © {{ new Date().getFullYear() }} Nirvati UG
              (haftungsbeschränkt).
            </p>
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
    label: t("navigation.blog"),
    to: "/blog",
    active: route.path.startsWith("/blog"),
  },
  {
    label: t("navigation.support"),
    to: "/support",
  },
]);

const head = useLocaleHead({ seo: true });
const title = computed(() => t(String(route.meta.title) ?? "Nirvati"));

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
</script>
