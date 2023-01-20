import { BookIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';

export default {
  icon: BookIcon,
  name: 'articleSummary',
  title: 'Article Summary',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'article',
      title: 'Article',
      type: 'reference',
      to: { type: 'article' },
      validation: (V) => V.required(),
    },
  ],
} satisfies SchemaTypeDefinition;
