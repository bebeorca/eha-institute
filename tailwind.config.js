/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#3b7e57',
          dark: '#306947',
          card: '#34724e',
          light: '#4d986d',
          placeholder: '#cce3d2',
          placeholderHover: '#bedbc5',
          text: '#ffffff',
          muted: '#d5e7db',
          border: 'rgba(255, 255, 255, 0.25)',
          footer: '#353736',
          footerMuted: '#9fa3a0',
          footerInput: '#484c4a'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

