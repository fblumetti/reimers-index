import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      // Two pages: the Reimers App (/) and the HOPE study edition (/hope/)
      input: {
        main: resolve(__dirname, 'index.html'),
        hope: resolve(__dirname, 'hope/index.html'),
      },
    },
  },
});
