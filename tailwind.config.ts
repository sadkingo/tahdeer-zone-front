import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-8deg)'},
          '50%': {transform: 'rotate(8deg)'},
        },
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      colors: {
        dark: "#c37409",
        mediumDark: "#d8840a",
        medium: "#f49e0b",
        mediumLight: "#f8b63c",
        light: "#fbd066",
      },
    },
  },
  darkMode: ["class", ".dark"],
  plugins: [],
} satisfies Config;
