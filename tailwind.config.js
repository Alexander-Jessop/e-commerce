/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/styles.css"],
  theme: {
    extend: {
      colors: {
        primary: "#4C51BF",
        secondary: "#2D3748",
        accent: "#A3A3A3",
        selected: "#FBD38D",
      },
      boxShadow: {
        outline: "0 0 0 2px rgba(76, 81, 191, 0.5)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      textColor: ["hover"],
      borderColor: ["hover", "focus"],
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [],
};
