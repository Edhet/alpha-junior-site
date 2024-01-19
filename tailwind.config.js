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
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      color: {
        'porcelain': {
          '50': '#f6f8f9',
          '100': '#eceff1',
          '200': '#d6dde1',
          '300': '#b2c0c7',
          '400': '#889ea8',
          '500': '#6a828d',
          '600': '#556a74',
          '700': '#45565f',
          '800': '#3c4950',
          '900': '#353f45',
          '950': '#232a2e',
      },
      }
    },
  },
  plugins: [],
}

