/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff6f61',
          DEFAULT: '#ff3d00',
          dark: '#c62828',
        },
        secondary: {
          light: '#26a69a',
          DEFAULT: '#00796b',
          dark: '#004d40',
        },
        neutral: {
          light: '#f0f0f0',
          DEFAULT: '#d0d0d0',
          dark: '#a0a0a0',
        },
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Libre Caslon Text', 'serif'],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
  mode: 'jit',
};
