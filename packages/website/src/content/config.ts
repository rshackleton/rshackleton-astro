import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    draft: z.boolean().optional(),
    external: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
