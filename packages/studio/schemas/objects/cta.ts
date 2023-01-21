import { defineType } from 'sanity';

export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'target',
      title: 'Target',
      type: 'string',
    },
  ],
});
