import { BlockElementIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';

export default {
  icon: BlockElementIcon,
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
  ],
} satisfies SchemaTypeDefinition;
