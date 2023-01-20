import { CogIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';

export default {
  icon: CogIcon,
  name: 'master',
  title: 'Master',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      validation: (V) => V.required(),
    },
  ],
} satisfies SchemaTypeDefinition;
