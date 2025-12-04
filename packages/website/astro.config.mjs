import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeExternalLinks from 'rehype-external-links';
import remarkBehead from 'remark-behead';

export default defineConfig({
  adapter: vercel(),

  integrations: [
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

  vite: {
    plugins: [tailwindcss()],
  },
});
