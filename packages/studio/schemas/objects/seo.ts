import { defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'description',
      title: 'SEO Description',
      type: 'string',
      validation: (V) => V.required(),
    },
  ],
});
