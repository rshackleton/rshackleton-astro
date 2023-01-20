import { SchemaTypeDefinition } from 'sanity';
import articleSummary from './blocks/articleSummary';
import code from './blocks/code';
import tweet from './blocks/tweet';
import article from './documents/article';
import contentPage from './documents/contentPage';
import home from './documents/home';
import master from './documents/master';
import hero from './sections/hero';

export const schemaTypes: SchemaTypeDefinition[] = [
  articleSummary,
  code,
  tweet,

  // Documents
  article,
  contentPage,
  home,
  master,

  // Sections
  hero,
];
