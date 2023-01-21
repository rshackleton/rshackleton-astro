import { SchemaTypeDefinition } from 'sanity';
import articleSummary from './blocks/articleSummary';
import code from './blocks/code';
import tweet from './blocks/tweet';
import article from './documents/article';
import contentPage from './documents/contentPage';
import home from './documents/home';
import master from './documents/master';
import cta from './objects/cta';
import seo from './objects/seo';
import articleList from './sections/articleList';
import bio from './sections/bio';
import experience from './sections/experience';
import hero from './sections/hero';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Blocks
  articleSummary,
  code,
  tweet,

  // Documents
  article,
  contentPage,
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
