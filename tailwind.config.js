/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "var(--background-color-primary)",
        "background-secondary": "var(--background-color-secondary)",
        primary: "var(--text-color-primary)",
        secondary: "var(--text-color-secondary)",
        "btn-primary": "var(--btn-color-primary)",
        "btn-primary-hover": "var(--btn-color-primary-hover)",
        "btn-secondary": "var(--btn-color-secondary)",
        "btn-secondary-hover": "var(--btn-color-secondary-hover)",
      },
    },
  },
  plugins: [],
};
