import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeExternalLinks from 'rehype-external-links';
import remarkBehead from 'remark-behead';

export default defineConfig({
  adapter: cloudflare(),
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
    sitemap(),
  ],
  output: 'server',
  site: 'https://rshackleton.dev',
});