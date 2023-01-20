import { SchemaTypeDefinition } from 'sanity';
import hero from '../sections/hero';

export default {
  name: 'sections',
  title: 'Sections',
  type: 'array',
  of: [{ type: hero.name }],
} satisfies SchemaTypeDefinition;
