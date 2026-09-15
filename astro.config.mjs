// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: actualizar cuando se compre el dominio definitivo (ver brief SEO)
  site: 'https://rainstopuy.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});