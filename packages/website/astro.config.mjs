import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
import sanity from 'astro-sanity';

// Load env for config.
dotenv.config({ path: `.env.local` });

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
    mdx(),
    sanity({
      dataset: process.env.SANITY_STUDIO_DATASET,
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      useCdn: true,
    }),
  ],
  output: 'static',
});
