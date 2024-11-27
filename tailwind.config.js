/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  presets: [
    require('./node_modules/flotiq-components-react/dist/tailwind.preset'), // Flotiq Component theme presets
  ],
  plugins: [],
  // Below configuration is required if you use the Cards component
  safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
