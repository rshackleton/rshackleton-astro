import { useSanityClient } from 'astro-sanity';
import groq from 'groq';

export type ArticleModel = {
  id: string;
  date: string;
  slug: string;
  summary: string;
  title: string;
};

export async function getArticles(count: number = -1) {
  const client = useSanityClient();

  const data = await client.fetch(
    groq`
      *[_type == "article"] {
        "id": _id,
        date,
        "slug": slug.current,
        summary,
        title,
      } | order(date desc)[0...$count]
    `,
    { count },
  );

  return data as ArticleModel[];
}

export async function getArticle(slug: string) {
  const client = useSanityClient();

  const data = await client.fetch(
    groq`
      *[_type == "article" && slug.current == $slug][0] {
        "id": _id,
        banner,
        content,
        date,
        summary,
        title,
      }
    `,
    { slug },
  );

  return data as ArticleModel;
}
