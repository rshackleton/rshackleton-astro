import { BookIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import { formatDate } from '../../helpers/date';
import content from '../fields/content';
import seo from '../fields/seo';

export default defineType({
  icon: BookIcon,
  name: 'article',
  title: 'Article',
  type: 'document',
  orderings: [
    {
      title: 'Publish Date',
      name: 'publishDateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      date: 'date',
      title: 'title',
    },
    prepare(selection) {
      const { date, title } = selection;

      return {
        title: title,
        subtitle: formatDate(date),
      };
    },
  },
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
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (V) => V.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (V) => V.required(),
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'image',
      validation: (V) => V.required(),
    },
    {
      ...content,
      validation: (V) => V.required(),
    },
    seo,
  ],
});
