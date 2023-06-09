/** @type {import('tailwindcss').Config} */
 export default ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js",  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      colors: {
        'pinkis': '#831843',
        'greyBG' : '#E8E8E8'
      },
      spacing: {
        '128': '44.5rem',
        '68': '17rem',
        '63': '15.5rem',
        '99': '22.7rem'
      },
      backgroundImage:{
        'zebra':"url('/img/zebra.png')",
        'gory' : "url('../img/mauntains.png')"
      }
    },
  },
  
  plugins: [require("tw-elements/dist/plugin"), require('flowbite/plugin')],
  darkMode: "class",
});

// const withMT = require("@material-tailwind/react/utils/withMT");
//  module.exports = withMT ({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js",],
//   theme: {
//     extend: {
//       backgroundImage:{
//         'zebra':"url('/img/zebra.png')"
//       }
//     },
//   },
//   plugins: [require("tw-elements/dist/plugin")],
//   darkMode: "class",
// });

