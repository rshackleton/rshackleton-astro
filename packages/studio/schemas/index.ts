import type { SchemaTypeDefinition } from 'sanity';
import home from './documents/home';
import master from './documents/master';
import cta from './objects/cta';
import seo from './objects/seo';
import articleList from './sections/articleList';
import bio from './sections/bio';
import experience from './sections/experience';
import hero from './sections/hero';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  home,
  master,

  // Objects
  cta,
  seo,

  // Sections
  articleList,
  bio,
  experience,
  hero,
];
