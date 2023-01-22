import type { PortableTextComponentProps } from '@portabletext/react';

type TweetModel = {
  asset: any;
};

const Tweet = (props: PortableTextComponentProps<TweetModel>) => {
  return <pre>{JSON.stringify(props.value)}</pre>;
};

export default Tweet;
