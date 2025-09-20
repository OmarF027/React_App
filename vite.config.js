import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            
    environment: 'jsdom',     // necessario per testare il DOM
    setupFiles: './src/setupTests.js', // file di setup per jest-dom
  },
});
