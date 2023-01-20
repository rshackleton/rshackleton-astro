declare module 'astro-sanity' {
  import type { SanityClient } from '@sanity/client';
  const useSanityClient: () => SanityClient;
  export { useSanityClient };
}
