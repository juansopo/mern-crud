/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //Al cargar mal la siguiente linea se traba la carga de la pagina
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "sans-serif",
      },
    },
  },
  // eslint-disable-next-line no-undef
plugins: [require("flowbite/plugin")],
};
