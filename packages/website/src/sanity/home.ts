import { useSanityClient } from 'astro-sanity';
import groq from 'groq';
import { sections } from './sections';

export type HomeModel = {
  id: string;
  sections: SectionModel[];
  seo: SEOModel;
  title: string;
};

export async function getHome() {
  const client = useSanityClient();

  const data = await client.fetch(
    groq`
      *[_type == "home"][0] {
        sections[] {
          ${sections}
        },
        seo {
          description,
          title,
        },
        title,
      }
    `,
  );

  return data as HomeModel;
}
