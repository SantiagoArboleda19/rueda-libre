/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*index.html",
    "./nocturna/*nocturna.html",
    "./nocturna/*componentes.html",
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "azul-noche": "#14213D",
        "gris-ruta": "#5B6470",
        "crema-rodante": "#FAF6EF",
        "verde-ruta": "#1E7A4F",
        "naranja-atardecer": "#F39A2B",
        "amarillo-farol": "#FFD166",
        "coffee-bean": "#0d0106ff",
        "vivid-royal": "#3626a7ff",
        "glaucous": "#657ed4ff",
        "scarlet-fire": "#ff331fff",
        "ghost-white": "#fbfbffff",
      },
      fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}