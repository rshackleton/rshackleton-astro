import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    date: z.date(),
    draft: z.boolean().default(false),
    external: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    title: z.string(),
  }),
});

export const collections = {
  articles,
};
