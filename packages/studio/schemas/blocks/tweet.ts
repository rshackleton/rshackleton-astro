import { LinkIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';

export default {
  icon: LinkIcon,
  name: 'tweet',
  title: 'Tweet',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (V) => V.required(),
    },
  ],
} satisfies SchemaTypeDefinition;
