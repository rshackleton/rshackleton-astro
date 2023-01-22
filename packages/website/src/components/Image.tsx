import type { PortableTextComponentProps } from '@portabletext/react';

type ImageModel = {
  asset: any;
};

const Image = (props: PortableTextComponentProps<ImageModel>) => {
  return <pre>{JSON.stringify(props.value)}</pre>;
};

export default Image;
