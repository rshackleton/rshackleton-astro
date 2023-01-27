import { useState } from 'react';

export type OutputProps = {
  from: string;
  to: string;
};

const OutputChar: React.FC<OutputProps> = ({ from, to }) => {
  const [value, setValue] = useState(to);

  return <span className="font-mono text-lg">{value}</span>;
};

const Output: React.FC<OutputProps> = ({ from, to }) => {
  return (
    <output className="flex items-center justify-center gap-x-2">
      {Array.from(to).map((_, index) => {
        const fromChar = from[index];
        const toChar = to[index];

        return <OutputChar key={`${index}-${fromChar}-${toChar}`} from={fromChar} to={toChar} />;
      })}
    </output>
  );
};

export default Output;
