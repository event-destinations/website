/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          dark: '#E2E8F0'
        },
        secondary: {
          DEFAULT: '#64748B',
          dark: '#94A3B8'
        },
        accent: {
          DEFAULT: '#3B82F6',
          dark: '#60A5FA'
        }
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif']
      }
    }
  },
  plugins: []
}