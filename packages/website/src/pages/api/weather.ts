import type { APIRoute } from 'astro';

const API_URL = `https://api.open-meteo.com/v1/forecast`;

export const get: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);

    const params = new URLSearchParams();
    params.append('latitude', url.searchParams.get('lat') ?? '');
    params.append('longitude', url.searchParams.get('lng') ?? '');
    params.append('current_weather', 'true');

    const res = await fetch(`${API_URL}?${params}`);
    const data = await res.json();

    const code = data.current_weather.weathercode;
    const value = getEmoji(code);

    return {
      body: JSON.stringify({ value, data }),
    };
  } catch (error) {
    console.log(error);

    return {
      body: JSON.stringify(error),
    };
  }
};

function getEmoji(code: number): string {
  switch (code) {
    case 0:
      return '☀️☀️ Clear ☀️☀️';

    case 1:
    case 2:
    case 3:
      return '☁️☁️ Overcast ☁️☁️';

    case 45:
    case 48:
      return '🌫️🌫️ Fog 🌫️🌫️';

    case 51:
    case 53:
    case 55:
      return '🌧️ Drizzle 🌧️';

    case 56:
    case 57:
      return '❄️🌧️ Freezing Drizzle 🌧️❄️';

    case 61:
    case 63:
    case 65:
      return '🌧️🌧️ Rain 🌧️🌧️';

    case 66:
    case 67:
      return '🌧️❄️🌧️ Freezing Rain 🌧️❄️🌧️';

    case 71:
    case 73:
    case 75:
    case 77:
      return '🌨️🌨️ Snow Fall 🌨️🌨️';

    case 80:
    case 81:
    case 82:
      return '🌧️ Rain Showers 🌧️';

    case 85:
    case 86:
      return '🌨️ Snow Showers 🌨️';

    case 95:
      return '⛈️ Thunderstorm ⛈️';

    case 96:
    case 99:
      return '⛈️ Thunderstorm & Hail ⛈️';

    default:
      return '⭐🌕 You have no weather, are you in space? 🌕⭐';
  }
}
