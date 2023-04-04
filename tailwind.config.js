/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      "codelife-green": {
        100: "#d8f7f5",
        200: "#b1f0eb",
        300: "#89e8e0",
        400: "#62e1d6",
        500: "#3bd9cc",
        600: "#2faea3",
        700: "#23827a",
        800: "#185752",
        900: "#0c2b29"
},"codelife-black": {
    100: "#d5d8d8",
    200: "#acb0b0",
    300: "#828989",
    400: "#596161",
    500: "#2f3a3a",
    600: "#262e2e",
    700: "#1c2323",
    800: "#131717",
    900: "#090c0c"
},"codelife-zinc": {
    100: "#f4f4f4",
    200: "#e9eaea",
    300: "#dddfdf",
    400: "#d2d5d5",
    500: "#c7caca",
    600: "#9fa2a2",
    700: "#777979",
    800: "#505151",
    900: "#282828"
},"codelife-blue": {
    100: "#cfe1ed",
    200: "#9fc4da",
    300: "#70a6c8",
    400: "#4089b5",
    500: "#106ba3",
    600: "#0d5682",
    700: "#0a4062",
    800: "#062b41",
    900: "#031521"
},
"codelife-purple": {
  100: "#e8defd",
  200: "#d1befb",
  300: "#b99dfa",
  400: "#a27df8",
  500: "#8b5cf6",
  600: "#6f4ac5",
  700: "#533794",
  800: "#382562",
  900: "#1c1231"
},
"codelife-pink": {
         100: "#fbdaeb",
         200: "#f7b6d6",
         300: "#f491c2",
         400: "#f06dad",
         500: "#ec4899",
         600: "#bd3a7a",
         700: "#8e2b5c",
         800: "#5e1d3d",
         900: "#2f0e1f"
},
"codelife-red": {
  100: "#f3d6d5",
  200: "#e7acaa",
  300: "#dc8380",
  400: "#d05955",
  500: "#c4302b",
  600: "#9d2622",
  700: "#761d1a",
  800: "#4e1311",
  900: "#270a09"
},
"twitter":{
  100: "#c2e6f2",
  200: "#9ad9ec",
  300: "#71cce5",
  400: "#49c0df",
  500: "#00aced",
  600: "#0087b5",
  700: "#006381",
  800: "#00484d",
  900: "#002418"
}
},

backgroundImage:{
  ground:"url('/img/ground.png')",
},

fontFamily:{
  merry:["Merriweather Sans","Roboto"],
  roboto:["Roboto","Franklin Gothic Medium","Tahoma","sans-serif"]
},

gradientColorStops:{
  "instagram":['#8B5CF6', '#EC4899', '#F43F5E']
}
},
    
  },
  variants:[],
  plugins: [],
}