import { initWasm, Resvg } from '@resvg/resvg-wasm';
import type { APIRoute } from 'astro';
import type { ReactNode } from 'react';
import type { Font, SatoriOptions } from 'satori';
import satori from 'satori';
import { html } from 'satori-html';

export const get: APIRoute = async (context) => {
  await initResvgWasm();

  // Get parameters.
  const { searchParams } = context.url;
  const title = searchParams.get('title') ?? '';
  const subtitle = searchParams.get('subtitle') ?? '';

  if (!title) {
    return new Response(null, { status: 404, statusText: 'Not Found' });
  }

  // Create markup.
  const markup = getMarkup({ title, subtitle });

  // Fetch fonts.
  const fonts = await fetchFonts();

  // Convert to svg.
  const svg = await satori(markup, {
    fonts,
    width: 600,
    height: 400,
  });

  // Convert to png.
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=86400',
    },
  });
};

async function fetchFont(url: string) {
  return fetch(url).then((res) => res.arrayBuffer());
}

async function fetchFonts(): Promise<SatoriOptions['fonts']> {
  const fonts: Font[] = [
    {
      name: 'Open Sans',
      data: await fetchFont(
        `https://unpkg.com/@fontsource/open-sans@4.5.14/files/open-sans-latin-400-normal.woff`,
      ),
      weight: 400,
      style: 'normal',
    },
    {
      name: 'Open Sans',
      data: await fetchFont(
        `https://unpkg.com/@fontsource/open-sans@4.5.14/files/open-sans-latin-600-normal.woff`,
      ),
      weight: 600,
      style: 'normal',
    },
  ];

  return fonts;
}

function getMarkup(props: { title: string; subtitle: string }) {
  const markup = html`
    <div style="display: flex; background-color: rgb(17 24 39); fontFamily: "Open Sans"; height: 100%; padding: 24px 32px 24px; width: 100%;">
      <div style="display: flex; flex-direction: column; height: 100%;">
        <span style="background-color: rgb(79 70 229); margin-bottom: 16px; margin-right: auto; height: 4px; width: 320px;"></span>
        
        <span style="color: rgb(229 231 235); font-size: 32px; font-weight: 600; line-height: 1.2em;">
          ${props.title}
        </span>

        <span style="background-color: rgb(79 70 229); margin-top: 24px; margin-right: auto; height: 4px; width: 200px;"></span>

        <span style="background-color: rgb(79 70 229); margin-top: auto; margin-left: auto; height: 4px; width: 240px;"></span>

        <span style="color: rgb(229 231 235); font-size: 18px; font-weight: 400; line-height: 1.2em; margin-top: 8px; margin-left: auto;">
          rshackleton.co.uk
        </span>
      </div>
    </div>
  `;

  return markup as ReactNode;
}

async function initResvgWasm() {
  try {
    await initWasm('https://unpkg.com/@resvg/resvg-wasm@2.2.0/index_bg.wasm');
  } catch (error) {
    console.log(`Attempted to init resvg multiple times.`);
  }
}
