import type { PortableTextComponentProps } from '@portabletext/react';

type CodeModel = {
  content: string;
  language: string;
  title: string;
  url?: string;
};

const Code = (props: PortableTextComponentProps<CodeModel>) => {
  return (
    <pre
      data-language={props.value.language}
      data-title={props.value.title}
      data-url={props.value.url}
    >
      {props.value.content}
    </pre>
  );
};

export default Code;
