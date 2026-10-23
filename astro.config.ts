import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim();
const site = configuredSite || 'https://plazasanmartinarg.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/404') })],
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
