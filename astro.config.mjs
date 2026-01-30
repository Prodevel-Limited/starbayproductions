// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://starbayproductions.com',
  integrations: [
    svelte(),
    react(),
    sitemap()
  ],
  image: {
    domains: ['starbayproductions.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    optimizeDeps: {
      exclude: ['sharp']
    }
  }
});
