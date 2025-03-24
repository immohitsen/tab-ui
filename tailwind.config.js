/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React components aur pages ke liye
    "./public/index.html", // Agar aapke public folder mein HTML files hain
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
