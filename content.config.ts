import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const pageSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  startBehindNav: z.boolean().optional().default(false),
});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '/',
      },
      schema: pageSchema,
    }),
    content_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '/',
      },
      schema: pageSchema,
    }),
  },
})
