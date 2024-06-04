/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
  theme: {
    extend: {}
  }
  
}

// module.exports = {
//   // other configurations...
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules\/react-double-scrollbar/,
//         use: {
//           loader: 'source-map-loader',
//         },
//       },
//     ],
//   },
// };





