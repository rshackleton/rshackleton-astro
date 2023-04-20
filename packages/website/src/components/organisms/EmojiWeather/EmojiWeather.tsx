import * as React from 'react';

type ApiResponse = {
  value: string;
};

type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export const EmojiWeather = () => {
  const refAbortController = React.useRef<AbortController>();

  const [data, setData] = React.useState<ApiResponse>();
  const [status, setStatus] = React.useState<ApiStatus>('idle');

  const fetchWeather = React.useCallback(async () => {
    try {
      setStatus('loading');

      const position = await getPosition();

      if (!position) {
        return;
      }

      refAbortController.current?.abort();
      refAbortController.current = new AbortController();

      const params = new URLSearchParams({
        lat: position?.coords.latitude.toString() ?? '',
        lng: position?.coords.longitude.toString() ?? '',
      });

      const res = await fetch(`/api/weather?${params}`, {
        signal: refAbortController.current?.signal,
      });

      const data = await res.json();

      console.log(data);

      setData(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  return (
    <div className={'mx-auto px-4 text-center text-xl'}>
      {status === 'loading' ? (
        <div className={'text-primary-100'}>Reaching for the skies...</div>
      ) : data?.value ? (
        <div className={'flex flex-col items-center gap-y-8'}>
          <div className={'text-primary-100'}>{data.value}</div>
          <button
            className={
              'bg-primary-600 hover:bg-accent-400 inline-block rounded-md px-4 py-2 text-base text-neutral-100 transition-colors disabled:pointer-events-none disabled:opacity-50'
            }
            onClick={(event) => {
              event.preventDefault();

              setData(undefined);
              setStatus('idle');
            }}
          >
            Go back
          </button>
        </div>
      ) : (
        <button
          className={
            'bg-primary-600 hover:bg-accent-400 inline-block rounded-md px-4 py-2 text-base text-neutral-100 transition-colors disabled:pointer-events-none disabled:opacity-50'
          }
          onClick={(event) => {
            event.preventDefault();
            fetchWeather();
          }}
        >
          Check the weather near you!
        </button>
      )}
    </div>
  );
};

async function getPosition() {
  return new Promise<GeolocationPosition>((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position);
    });
  });
}
