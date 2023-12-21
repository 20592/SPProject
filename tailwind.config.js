/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily:{
        cairo: ["Cairo", "sans-serif"],
        roboto:["roboto"],
      },
      colors:{
        natural:'#C4C4C4',
        emerald:'#38CB89',
        purple:'#9A6BD7',
        black:'#333333',
        darkPurple:'#311B4E',
        green:'#2BB596',
        zinc:'#6A6A6A',
        blue:'#6418C3',
        grayText:'#A8A8A8',
        grayFine:"#EDF1FB",
        malta:"#FFA600",
        tomato:"#FF8B61",
        darkGrey:"5B5B5B",
        lightGrey:"EBEBEB",
        voilet:"#D58EE9",
        silver:"#D3D3D3",
     

      },
    },
  },
  plugins: [],
}
