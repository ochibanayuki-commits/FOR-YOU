import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths support Baota subdirectories and GitHub Pages.
  base: './',
  plugins: [react()],
})
