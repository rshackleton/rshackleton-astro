import { defineConfig } from 'astro/config';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeExternalLinks from 'rehype-external-links';
import remarkBehead from 'remark-behead';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import sanity from 'astro-sanity';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
          },
        ],
        rehypeAccessibleEmojis,
      ],
      remarkPlugins: [
        [
          remarkBehead,
          {
            minDepth: 2,
          },
        ],
      ],
    }),
    sanity({
      apiVersion: new Date().toISOString().substring(0, 10),
      dataset: process.env.SANITY_STUDIO_DATASET,
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      useCdn: true,
    }),
    sitemap(),
  ],
  output: 'server',
  site: 'https://rshackleton.co.uk',
});
