/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    

    screens:{

     sm:'480px',
     md:'768px',
     lg:'976px',
     xl:'1440px',

    },

   extend: {

       colors:{

          cardBackgrndColor:'#f2f3f8',
          brightRedLight:'hsl(12,88%,69%)',
          brightRedSupLight:'hsl(12,88%,95%)',
          darkBlue:'#0056d2',
          darkGreyishBlue:'hsl(227,12%,61%)',
          veryDarkBlue:'hsl(223,12%,13%)',
          veryPaleRed:'hsl(13,100%,96%)',
          veryLightGray:'hsl(0,0%,98%)',
          subFooter:'#2a2a2a',
          mainFooter:'#4d4d4d',
          mentormg:'#02081B',
          qnbckgrnd:  '#f8f7ff',
          bookbtn:'#14151a',
          btnClr:'#989eb6'
          
          


       },
       fontFamily:{
         poppins:['Poppins']
       }

   },
 },
 plugins: [],
}
