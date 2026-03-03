/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0CC8A8",
        darkBg: "#0F0F0F",
        darkSurface: "#1A1A1A",

        severity: {
          critical: "#EF4444",
          high: "#F97316",
          medium: "#FACC15",
          low: "#22C55E",
        },

        surface: {
          light: "#F5F5F5",
        },

        border: {
          light: "#E5E7EB",
          dark: "#2A2A2A",
        }
      },
    },
  },
  plugins: [],
}