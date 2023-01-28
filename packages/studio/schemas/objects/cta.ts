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
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'target',
      title: 'Target',
      type: 'string',
    },
  ],
});
