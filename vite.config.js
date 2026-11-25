import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Deploy the site under https://baoqingju.me/1/
  base: '/1/',
  plugins: [react()],
})
