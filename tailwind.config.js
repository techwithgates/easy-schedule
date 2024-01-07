/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Verdana', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}