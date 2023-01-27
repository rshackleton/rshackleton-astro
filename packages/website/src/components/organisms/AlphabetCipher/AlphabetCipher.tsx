import type { SyntheticEvent } from 'react';
import * as React from 'react';
import { decode, encode } from './cipher';
import Output from './Output';

const DEFAULT_SECRET = 'scones';
const DEFAULT_INPUT = 'alphabet cipher';
const DEFAULT_OUTPUT = encode(sanitize(DEFAULT_INPUT), DEFAULT_SECRET);

const AlphabetCipher: React.FC = () => {
  const [input, setInput] = React.useState(DEFAULT_INPUT);
  const [output, setOutput] = React.useState(DEFAULT_OUTPUT);
  const [secret, setSecret] = React.useState(DEFAULT_SECRET);

  return (
    <form className="mx-auto flex max-w-lg flex-col gap-y-4">
      <fieldset className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-4">
        <label className="text-primary-900 text-base font-medium" htmlFor="secret">
          Secret:
        </label>
        <input
          id="secret"
          className="border shadow-sm"
          name="secret"
          type="password"
          value={secret}
          onChange={(event) => setSecret(event.target.value)}
        />

        <label className="text-primary-900 text-base font-medium" htmlFor="input">
          Input:
        </label>
        <input
          id="input"
          className="border shadow-sm"
          name="input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </fieldset>

      <div className="flex gap-x-4">
        <button
          className="bg-primary-700 hover:bg-primary-600 rounded border py-3 px-5 text-base font-bold text-white transition"
          name="encode"
          type="button"
          onClick={handleEncode}
        >
          Encode
        </button>

        <button
          className="bg-primary-700 hover:bg-primary-600 rounded border py-3 px-5 text-base font-bold text-white transition"
          name="decode"
          type="button"
          onClick={handleDecode}
        >
          Decode
        </button>
      </div>

      {output && <Output from={input} to={output} />}
    </form>
  );

  function handleEncode(event: SyntheticEvent) {
    event.preventDefault();
    setOutput(encode(sanitize(input), secret));
  }

  function handleDecode(event: SyntheticEvent) {
    event.preventDefault();
    setOutput(decode(sanitize(input), secret));
  }
};

export default AlphabetCipher;

function sanitize(value: string) {
  return value.replaceAll(/\W/g, '');
}
