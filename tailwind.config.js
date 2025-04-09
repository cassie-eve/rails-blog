// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{html,erb,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};