import type { SyntheticEvent } from 'react';
import * as React from 'react';
import { decode, encode } from './cipher';
import Output from './Output';

type EncodeAction = {
  type: 'encode';
  payload: { input: string; secret: string };
};

type DecodeAction = {
  type: 'decode';
  payload: { input: string; secret: string };
};

type ActionKind = DecodeAction | EncodeAction;

type ReducerValue = {
  input: string;
  output: string;
  secret: string;
};

const AlphabetCipher: React.FC = () => {
  const [value, dispatch] = React.useReducer(
    (state: ReducerValue, action: ActionKind): ReducerValue => {
      switch (action.type) {
        case 'encode':
          return {
            input: action.payload.input,
            secret: action.payload.secret,
            output: encode(action.payload.input, action.payload.secret),
          };

        case 'decode':
          return {
            input: action.payload.input,
            secret: action.payload.secret,
            output: decode(action.payload.input, action.payload.secret),
          };

        default:
          return { ...state };
      }
    },
    { input: 'meetmebythetree', output: 'egsgqwtahuiljgs', secret: 'scones' },
  );

  const [inputRaw, setInputRaw] = React.useState(value.input);
  const [secretRaw, setSecretRaw] = React.useState(value.secret);

  return (
    <form className="mx-auto flex max-w-lg flex-col gap-y-8">
      <fieldset className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4">
        <label className="gradient-primary text-right font-medium text-lg" htmlFor="secret">
          Secret:
        </label>
        <input
          id="secret"
          className="rounded border border-neutral-500 bg-neutral-800 px-2 py-1 font-mono tracking-[4px] text-neutral-100 shadow-sm"
          name="secret"
          type="password"
          value={secretRaw}
          onChange={(event) => setSecretRaw(sanitize(event.target.value))}
        />

        <label className="gradient-primary text-right font-medium text-lg" htmlFor="input">
          Input:
        </label>
        <input
          id="input"
          className="rounded border border-neutral-500 bg-neutral-800 px-2 py-1 font-mono tracking-[4px] text-neutral-100 shadow-sm"
          name="input"
          type="text"
          value={inputRaw}
          onChange={(event) => setInputRaw(sanitize(event.target.value))}
        />
      </fieldset>

      <div className="flex justify-center gap-x-4">
        <button
          className="rounded border-0 bg-primary-700 px-5 py-3 font-bold text-white transition text-base hover:bg-primary-600"
          name="encode"
          type="button"
          onClick={handleEncode}
        >
          Encode
        </button>

        <button
          className="rounded border-0 bg-primary-700 px-5 py-3 font-bold text-white transition text-base hover:bg-primary-600"
          name="decode"
          type="button"
          onClick={handleDecode}
        >
          Decode
        </button>
      </div>

      <div className="flex justify-center">
        <Output from={value.input} to={value.output} />
      </div>
    </form>
  );

  function handleEncode(event: SyntheticEvent) {
    event.preventDefault();

    dispatch({
      type: 'encode',
      payload: { input: sanitize(inputRaw), secret: sanitize(secretRaw) },
    });
  }

  function handleDecode(event: SyntheticEvent) {
    event.preventDefault();

    dispatch({
      type: 'decode',
      payload: { input: sanitize(inputRaw), secret: sanitize(secretRaw) },
    });
  }
};

export default AlphabetCipher;

function sanitize(value: string) {
  return value.replaceAll(/\W/g, '');
}
