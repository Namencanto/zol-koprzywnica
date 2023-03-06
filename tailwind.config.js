/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-xl":
          "0 10px 15px -3px var(--shadow-color), 0 4px 6px -4px var(--shadow-color);",
        "custom-lg":
          "0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color);",
      },
      colors: {
        "background-primary": "var(--background-color-primary)",
        "background-secondary": "var(--background-color-secondary)",
        "background-tertiary": "var(--background-color-tertiary)",

        primary: "var(--text-color-primary)",
        secondary: "var(--text-color-secondary)",
        tertiary: "var(--text-color-tertiary)",

        "btn-primary": "var(--btn-color-primary)",
        "btn-primary-hover": "var(--btn-color-primary-hover)",
        "btn-secondary": "var(--btn-color-secondary)",
        "btn-secondary-hover": "var(--btn-color-secondary-hover)",

        "text-gray-100": "var(--text-gray-100)",
        "text-gray-200": "var(--text-gray-200)",
        "text-gray-300": "var(--text-gray-300)",
        "text-gray-400": "var(--text-gray-400)",
        "text-gray-500": "var(--text-gray-500)",
        "text-gray-600": "var(--text-gray-600)",
        "text-gray-800": "var(--text-gray-800)",
        "text-gray-900": "var(--text-gray-900)",
      },
      // screens: {
      //   xs: "400px",
      // },
    },
  },
  plugins: [],
};
