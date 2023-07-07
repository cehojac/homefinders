/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./propiedad.html",
    "./detalles.busqueda.html",
    "./contacto.html",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1db2ff",
        "primaryLight": "#E7f6fd",
        "cGlobal": "#2f2f2f",
        "navyBlue": "#1B6B93",
        "cBorder": "#0083c7",
        "cTitle": "#4d4d4d",
        "cGreenForte": "#32d800",
        "sidebar-menu": "#336ca6",
        "borderSidebar-menu": "#2c5d8f",
        "hover-nav-li-a": "#13131310"
      },
      display: {
        "inherit": "inherit"
      },
      fontFamily: {
        "raleway": "'Raleway', sans-serif",
        "Monrope": "'Manrope', sans-serif",
        "poppins": "'Poppins', sans-serif",
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      screens: {
        's375': '375px',
        's425': '425px',
        's2xl': '1360px',
        's3xl': '1440px',
        's4xl': '1920px',
      },
    },
  },
}