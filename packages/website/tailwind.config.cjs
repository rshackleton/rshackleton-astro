const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    fontSize: false,
  },
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',

      // Specific colours
      black: colors.black,
      white: colors.white,
      gray: colors.gray,

      // Named colours
      neutral: colors.gray,
      primary: colors.indigo,
      accent: colors.indigo,
    },
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: toRem(16),
        fontSizeMax: toRem(18),
        ratioMin: 1.125,
        ratioMax: 1.25,
        screenMin: toRem(375),
        screenMax: toRem(1600),
        unit: 'rem',
        prefix: '',
      },
    }),
  ],
};

function toRem(pixelValue) {
  return pixelValue / 16;
}
