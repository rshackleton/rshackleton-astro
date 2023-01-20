import { CodeBlockIcon } from '@sanity/icons';
import { SchemaTypeDefinition } from 'sanity';

export default {
  icon: CodeBlockIcon,
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (V) => V.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
} satisfies SchemaTypeDefinition;
