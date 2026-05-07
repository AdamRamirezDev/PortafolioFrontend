import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/PortafolioFrontend/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  }
});
