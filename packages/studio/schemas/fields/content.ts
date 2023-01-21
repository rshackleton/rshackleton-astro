import { defineField } from 'sanity';

export default defineField({
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
});
