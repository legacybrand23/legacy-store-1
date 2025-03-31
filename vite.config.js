import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Asegúrate de que la base sea relativa
  plugins: [
    react() // Agrega el plugin para React
  ]
});