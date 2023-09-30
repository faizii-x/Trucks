/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        blob: "blob 5s ease-out  both",
        // blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1) translateY(0)",
            transformOrigin: "50% 64%",

            // transform: "translate(30px, 30px) scale(1)",
          },
          // "33%": {
          //   transform: "translate(30px, -50px) scale(1.1)",
          // },
          // "66%": {
          //   transform: "translate(-20px, 20px) scale(1.1)",
          // },
          "100%": {
            transform: "scale(1.25) translateY(15px)",
            transformOrigin: "bottom",

            // transform: "translate(30px, -40px) scale(1.1)",
          },
        },
      },

      // animation: {
      //   flip: "slide-top 0.7s ease-out both",
      //   // blob: "blob 7s infinite",
      // },
      // keyframes: {
      //   flip: {
      //     "0%": {
      //       transform: "transform: translateY(0)",
      //       // transformOrigin: "50% 64%",
      //     },
         
      //     // "50%": {
      //     //   transform: "scale(2.5) rotateX(-90deg)",
      //     // },
      //     "100%": {
      //       transform: "transform: translateY(-100px)",
      //       // transformOrigin: "bottom",

      //     },
      //   },
      // },


    },
  },
  plugins: [],
}
