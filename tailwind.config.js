/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lightblueStellar': '#9bc1e8',
        'blueStellar': '#3d87d3'
        
      },
    },
    
  },
  plugins: [],
}

