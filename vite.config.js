import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'Assets': path.resolve(__dirname, 'Assets'),
      'Applications': path.resolve(__dirname, 'Applications'),
      'Repositories': path.resolve(__dirname, 'Repositories'),
      'Frameworks': path.resolve(__dirname, 'Frameworks'),
      'UI': path.resolve(__dirname, 'UI')
    }
  },
  plugins: [react()],
})
