import { defineField } from 'sanity';
import articleList from '../sections/articleList';
import bio from '../sections/bio';
import experience from '../sections/experience';
import hero from '../sections/hero';

export default defineField({
  name: 'sections',
  title: 'Sections',
  type: 'array',
  of: [
    { type: articleList.name },
    { type: bio.name },
    { type: experience.name },
    { type: hero.name },
  ],
});
