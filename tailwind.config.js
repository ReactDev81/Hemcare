/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    "./app/**/*.{js,jsx,ts,tsx}", 
    './components/**/*.{js,ts,tsx}',
    './welcome/**/*.{js,ts,tsx}'
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      spacing: {
        '30': '30px',
      },
      colors:{
        red:{
          dark: '#F43F5E',
          light: '#FFE5E9'
        },
        green:{
          dark: '#14B8A6',
          light: '#D2FBF2',
        },
        blue:{
          dark: '#151F31',
          light: '#1E293B',
        },
        gray:{
          dark: '#5C6679',
          light: '#F1F5F9'
        },
        gold:{
          dark: '#F6A825',
          light: '#FFF5CD'
        }
      },
      fontFamily: {
        'figtree-normal': ['Figtree-400'],
        'figtree-medium': ['Figtree-500'],
        'figtree-semibold': ['Figtree-600'],
        'figtree-bold': ['Figtree-700']
      },
    },
  },
  plugins: [],
};
