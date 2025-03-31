import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Asegúrate de que esté './' sin barra al final.
  plugins: [react()]
});