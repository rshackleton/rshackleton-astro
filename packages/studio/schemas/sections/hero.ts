import { BlockElementIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
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
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
    {
      name: 'anchorId',
      title: 'Anchor ID',
      type: 'string',
    },
  ],
});
