import { createClient } from '@sanity/client';
import groq from 'groq';

export type MasterModel = {
  id: string;
  seo: SEOModel;
  title: string;
};

export async function getMaster() {
  const client = createClient({
    apiVersion: new Date().toISOString().substring(0, 10),
    dataset: import.meta.env.SANITY_STUDIO_DATASET,
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
    useCdn: true,
  });

  const data = await client.fetch(
    groq`
      *[_type == "master"][0] {
        "id": _id,
        seo {
          description,
          title,
        },
        title,
      }
    `,
  );

  return data as MasterModel;
}
