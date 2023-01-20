import { useSanityClient } from 'astro-sanity';
import groq from 'groq';

export type MasterModel = {
  id: string;
  metaDescription: string;
  metaTitle: string;
  title: string;
};

export async function getMaster() {
  const client = useSanityClient();

  const data = await client.fetch(
    groq`
      *[_type == "master"][0] {
        "id": _id,
        metaDescription,
        metaTitle,
        title,
      }
    `,
  );

  return data as MasterModel;
}
