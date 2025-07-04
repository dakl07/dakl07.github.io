import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
})
