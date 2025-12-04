import { domAnimation, LazyMotion, m } from 'framer-motion';
import IconClipboard from 'heroicons/24/outline/clipboard.svg?raw';
import type { CSSProperties } from 'react';
import { getCharRange } from './cipher';

export type OutputProps = {
  from: string;
  to: string;
};

const OutputChar: React.FC<OutputProps> = ({ from, to }) => {
  const range = getCharRange(from, to);

  return (
    <span
      className="relative w-[1ch] overflow-clip font-mono text-lg"
      style={{ '--height': '36px', height: 'var(--height)' } as CSSProperties}
    >
      <m.span
        className="absolute flex flex-col"
        initial={{
          y: '0%',
        }}
        animate={{
          y: 'calc(-100% + var(--height))',
        }}
        style={{
          willChange: 'transform',
        }}
        transition={{
          duration: getRandomDuration(),
          delay: 0.5,
          ease: 'easeOut',
        }}
      >
        {range.map((char, index) => (
          <span
            key={`${index}-${char}`}
            className="flex items-center"
            style={{ height: 'var(--height)' }}
          >
            {char}
          </span>
        ))}
      </m.span>
    </span>
  );
};

const Output: React.FC<OutputProps> = ({ from, to }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="flex gap-x-2">
        <p className="sr-only">{to}</p>

        <div
          className="flex cursor-default select-none items-center justify-center gap-x-1 rounded-md border border-neutral-500 bg-neutral-800 px-3 py-1 text-neutral-100 shadow-sm sm:gap-x-2"
          aria-hidden="true"
        >
          {Array.from(to).map((_, index) => {
            const fromChar = from[index];
            const toChar = to[index];

            return (
              <OutputChar key={`${index}-${fromChar}-${toChar}`} from={fromChar} to={toChar} />
            );
          })}
        </div>

        <button
          className="flex place-content-center place-items-center rounded border-0 bg-primary-700 px-2 py-2 font-bold text-white transition text-base hover:bg-primary-600 [&>svg]:w-6"
          type="button"
          onClick={async () => {
            const permissionName = 'clipboard-write' as PermissionName; // avoid incorrect ts error
            const status = await navigator.permissions.query({ name: permissionName });

            if (status.state === 'granted' || status.state === 'prompt') {
              navigator.clipboard.writeText(to);
            }
          }}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: reference to trusted SVG
          dangerouslySetInnerHTML={{ __html: IconClipboard }}
          aria-label="Copy Output"
        />
      </div>
    </LazyMotion>
  );
};

export default Output;

const DEFAULT_DURATION = 4;

function getRandomDuration() {
  return DEFAULT_DURATION - (Math.random() / 2) * DEFAULT_DURATION;
}
