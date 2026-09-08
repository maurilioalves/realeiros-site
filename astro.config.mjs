import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://realeirosplay.com',
  output: 'static',
  i18n: {
    locales: ['pt-BR', 'en', 'es'],
    defaultLocale: 'pt-BR',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
