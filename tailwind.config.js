module.exports = {
  // Just In Time
  mode: "jit",

  // Remove all unused styles
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [require("tailwind-scrollbar-hide")],
};
