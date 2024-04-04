/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '8px 8px 0px 0px #000;',
        '4xl': '16px 16px 0px 0px #000;',
      },
    },
  },
  plugins: [],
};
