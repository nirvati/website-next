<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      :to="post.path"
      :title="post.title"
      :description="post.description"
      :image="post.image"
      :date="
        post.date &&
        new Date(post.date).toLocaleDateString('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      "
      :authors="post.authors"
      :badge="post.badge"
      :orientation="index === 0 ? 'horizontal' : 'vertical'"
      :class="[index === 0 && 'col-span-full']"
      variant="naked"
      :ui="{
        description: 'line-clamp-2',
      }"
    />
  </UBlogPosts>
</template>

<script setup lang="ts">
const { locale, t } = useI18n();

const { data: posts } = await useAsyncData("blog-overview", async () => {
  const collection = ("content_" + locale.value) as "content_en" | "content_de";
  let contents = await queryCollection(collection)
    .select("title", "description", "path", "image", "date", "authors", "badge")
    .order("date", "DESC")
    .where("path", "LIKE", "/blog/%")
    .all();

  // Fallback to default locale if content is missing
  if (!contents && locale.value !== "en") {
    contents = await queryCollection("content_en")
      .select(
        "title",
        "description",
        "path",
        "image",
        "date",
        "authors",
        "badge"
      )
      .where("path", "LIKE", "/blog/%")
      .all();
  }

  return contents;
});
</script>
