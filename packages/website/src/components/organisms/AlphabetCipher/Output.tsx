import { animate } from 'framer-motion';
import IconClipboard from 'heroicons/24/outline/clipboard.svg?raw';
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
      <output className="flex cursor-default select-none items-center justify-center gap-x-1 rounded-md border border-neutral-500 bg-neutral-800 px-3 py-1 text-neutral-100 shadow-sm sm:gap-x-2">
        {Array.from(to).map((_, index) => {
          const fromChar = from[index];
          const toChar = to[index];

          return <OutputChar key={`${index}-${fromChar}-${toChar}`} from={fromChar} to={toChar} />;
        })}
      </output>

      <button
        className="bg-primary-700 hover:bg-primary-600 flex place-content-center place-items-center rounded border-0 px-2 py-2 text-base font-bold text-white transition [&>svg]:w-6"
        type="button"
        onClick={async () => {
          const permissionName = 'clipboard-write' as PermissionName; // avoid incorrect ts error
          const status = await navigator.permissions.query({ name: permissionName });

          if (status.state === 'granted' || status.state === 'prompt') {
            navigator.clipboard.writeText(to);
          }
        }}
        dangerouslySetInnerHTML={{ __html: IconClipboard }}
        aria-label="Copy Output"
      />
    </div>
  );
};

export default Output;

const DEFAULT_DURATION = 4;

function getRandomDuration() {
  return DEFAULT_DURATION - (Math.random() / 2) * DEFAULT_DURATION;
}
