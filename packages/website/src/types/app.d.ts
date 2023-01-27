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
