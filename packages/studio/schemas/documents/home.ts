import { HomeIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';
import sections from '../fields/sections';

export default {
  icon: HomeIcon,
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      ...sections,
      validation: (V) => V.required(),
    },
  ],
} satisfies SchemaTypeDefinition;
