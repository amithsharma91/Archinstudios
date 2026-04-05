/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'archin-cream': '#F5F0E8',
          'archin-navy': '#1B2A4A',
          'archin-gold': '#C9A96E',
          'archin-grey': '#7A7A7A',
          'archin-footer': '#0F1E35',
        },
        fontFamily: {
          'heading': ['Cormorant Garamond', 'serif'],
          'body': ['Jost', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }