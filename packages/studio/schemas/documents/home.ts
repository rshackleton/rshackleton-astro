import { HomeIcon } from '@sanity/icons';
import { defineType } from 'sanity';
import sections from '../fields/sections';
import seo from '../fields/seo';

export default defineType({
  icon: HomeIcon,
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (V) => V.required(),
    },
    {
      ...sections,
      validation: (V) => V.required(),
    },
    seo,
  ],
});
