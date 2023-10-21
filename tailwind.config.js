/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5e3bee",
        headingColor: "#282938",
        bgShade: "#f5fcff",
        github: "#e62872",
        darkblue: "#1c1e53",
        black: "#000",
        white: "#fff",
        overlay: "hsla(0, 0%, 0%, 0.5)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}