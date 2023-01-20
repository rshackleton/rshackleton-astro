import { DocumentIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';
import content from '../fields/content';

export default {
  icon: DocumentIcon,
  name: 'contentpage',
  title: 'Content Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (V) => V.required(),
    },
    {
      ...content,
      validation: (V) => V.required(),
    },
  ],
} satisfies SchemaTypeDefinition;
