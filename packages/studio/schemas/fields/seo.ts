import { defineField } from 'sanity';
import seo from '../objects/seo';

export default defineField({
  name: 'seo',
  title: 'SEO',
  type: seo.name,
});
