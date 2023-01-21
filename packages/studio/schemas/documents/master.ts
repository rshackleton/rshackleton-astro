import { CogIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import seo from '../fields/seo';

export default defineType({
  icon: CogIcon,
  name: 'master',
  title: 'Master',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    seo,
  ],
});
