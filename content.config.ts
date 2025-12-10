import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'
import { asSeoCollection } from '@nuxtjs/seo/content';

const pageSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  startBehindNav: z.boolean().optional().default(false),
  date: z.string().datetime().optional(),
  authors: z.array(z.object({
    name: z.string().nonempty(),
  })).optional(),
  badge: z.string().optional(),
  image: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    content_en: defineCollection(asSeoCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '/',
      },
      schema: pageSchema,
    })),
    content_de: defineCollection(asSeoCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '/',
      },
      schema: pageSchema,
    })),
    content_fr: defineCollection(asSeoCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '/',
      },
      schema: pageSchema,
    })),
  },
})
