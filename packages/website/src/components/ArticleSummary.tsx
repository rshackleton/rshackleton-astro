import type { PortableTextComponentProps } from '@portabletext/react';

type ArticleSummaryModel = {
  asset: any;
};

const ArticleSummary = (props: PortableTextComponentProps<ArticleSummaryModel>) => {
  return <pre>{JSON.stringify(props.value)}</pre>;
};

export default ArticleSummary;
