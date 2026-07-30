/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0e3930',
          dark: '#082b24',
          light: '#1d5d50',
        },
        secondary: '#f4eed6',
        cream: '#f4eed6',
        beige: '#e7dcc0',
        gold: '#c7a55b',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(14, 57, 48, 0.08)',
        'md': '0 4px 16px rgba(14, 57, 48, 0.12)',
        'lg': '0 8px 32px rgba(14, 57, 48, 0.16)',
        'xl': '0 16px 48px rgba(14, 57, 48, 0.24)',
      },
    },
  },
  plugins: [],
}
