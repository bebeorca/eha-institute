import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    allowedHosts: [
      '0bd0c03a96c83d.lhr.life'
    ]
  }
});

