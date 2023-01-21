import { BlockElementIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
  icon: BlockElementIcon,
  name: 'articleList',
  title: 'Article List',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
    {
      name: 'count',
      title: 'Count',
      type: 'number',
    },
    {
      name: 'anchorId',
      title: 'Anchor ID',
      type: 'string',
    },
  ],
});
