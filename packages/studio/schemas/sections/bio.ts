import { BlockElementIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
  icon: BlockElementIcon,
  name: 'bio',
  title: 'Bio',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'anchorId',
      title: 'Anchor ID',
      type: 'string',
    },
  ],
});
