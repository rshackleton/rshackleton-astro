declare module 'astro-sanity' {
  import type { SanityClient } from '@sanity/client';
  import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
  import type { SanityClientLike } from '@sanity/image-url/lib/types/types';
  const createImageBuilder: (client: SanityClientLike) => ImageUrlBuilder;
  const useSanityClient: () => SanityClient;
  export { createImageBuilder, useSanityClient };
}
