import { SchemaTypeDefinition } from 'sanity';

export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    { type: 'block' },
    { type: 'articleSummary' },
    { type: 'code' },
    { type: 'tweet' },
    { type: 'image' },
  ],
} satisfies SchemaTypeDefinition;
