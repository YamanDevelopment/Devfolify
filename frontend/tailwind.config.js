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
          "secondary": "#FFCB7B",
          "accent": "#FF3737",
          "neutral": "#000",
          "base-content": "#EFF2DA",
          "base-100": "#1d232a",
        },
      }
    ],
  },
}
