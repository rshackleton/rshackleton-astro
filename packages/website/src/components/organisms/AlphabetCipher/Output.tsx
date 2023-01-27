import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { getCharForIndex, getCharIndex } from './cipher';

export type OutputProps = {
  from: string;
  to: string;
};

const OutputChar: React.FC<OutputProps> = ({ from, to }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fromIndex = getCharIndex(from);
    const toIndex = getCharIndex(to);
    const duration = getRandomDuration();

    const controls = animate(fromIndex, toIndex, {
      delay: 0.5,
      duration,
      ease: 'linear',
      type: 'tween',
      onUpdate(latest) {
        if (ref.current) {
          ref.current.innerText = getCharForIndex(latest) ?? '';
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={ref} className="font-mono text-lg" />;
};

const Output: React.FC<OutputProps> = ({ from, to }) => {
  return (
    <div className="flex gap-x-2">
      <output className="bg-primary-50 flex cursor-default select-none items-center justify-center gap-x-2 rounded-md px-3 py-1">
        {Array.from(to).map((_, index) => {
          const fromChar = from[index];
          const toChar = to[index];

          return <OutputChar key={`${index}-${fromChar}-${toChar}`} from={fromChar} to={toChar} />;
        })}
      </output>

      <button
        className="bg-primary-700 hover:bg-primary-600 rounded border py-3 px-5 text-base font-bold text-white transition"
        type="button"
        onClick={async () => {
          const permissionName = 'clipboard-write' as PermissionName; // avoid incorrect ts error
          const status = await navigator.permissions.query({ name: permissionName });

          if (status.state === 'granted' || status.state === 'prompt') {
            navigator.clipboard.writeText(to);
          }
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default Output;

const DEFAULT_DURATION = 4;

function getRandomDuration() {
  return DEFAULT_DURATION - (Math.random() / 2) * DEFAULT_DURATION;
}
