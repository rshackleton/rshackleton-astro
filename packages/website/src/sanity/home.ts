import { createClient } from '@sanity/client';
import groq from 'groq';
import { sections } from './sections';

export type HomeModel = {
  id: string;
  sections: SectionModel[];
  seo: SEOModel;
  title: string;
};

export async function getHome() {
  const client = createClient({
    apiVersion: new Date().toISOString().substring(0, 10),
    dataset: import.meta.env.SANITY_STUDIO_DATASET,
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
    useCdn: true,
  });

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
