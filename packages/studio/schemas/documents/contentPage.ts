import { DocumentIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import content from '../fields/content';
import seo from '../fields/seo';

export default defineType({
  icon: DocumentIcon,
  name: 'contentpage',
  title: 'Content Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (V) => V.required(),
    },
    {
      ...content,
      validation: (V) => V.required(),
    },
    seo,
  ],
});
