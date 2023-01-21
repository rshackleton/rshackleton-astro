declare interface CtaModel {
  target?: '_self' | '_target';
  text: string;
  url: string;
}

declare interface SectionModel {
  _key: string;
  _type: string;
  [prop: string]: unknown;
}

declare interface SEOModel {
  description?: string;
  title: string;
}

declare module 'virtual:component-map' {
  import type { ComponentMapModule } from '@rshackleton/vite-plugin-component-map';
  const COMPONENT_MAP: ComponentMapModule;
  export default COMPONENT_MAP;
}
