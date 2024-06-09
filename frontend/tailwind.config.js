/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003bff",
          "secondary": "#1C2538",
          "accent": "#24314A",
          "neutral": "#000",
          "base-content": "#EFF2DA",
          "base-100": "#1d232a",
        },
      }
    ],
  },
}
