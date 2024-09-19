import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        fontFamily: {
          'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        },
        lightColors: {
          'background': '#fff',
          'primary': '#333',
          'second': '#f0f0f0',
          'third': '#555',
          'fourth': '#eee',
          'fifth': '#f5f5f5',
          'sixth': '#f9f9f9',
          'border': '#ddd',
          'borderLight': '#ccc',
        },
        darkColors: {
          'background': '#111',
          'primary': '#fff',
          'second': '#222',
          'third': '#ddd',
          'fourth': '#333',
          'fifth': '#ccc',
          'sixth': '#444',
          'border': '#555',
          'borderLight': '#666',
        },
        submit: {
          'secondary': '#4caf50',
          'light': '#45a049',
          'primary' : '#fff',
        },
        red: {
          DEFAULT: colors.red[500],
          dark: '#333'
        },
      },
    },
  },
  plugins: [],
}
