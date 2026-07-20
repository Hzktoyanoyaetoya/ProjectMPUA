import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#141414",
        surfaceLight: "#1D1D1D",

        primary: "#22C55E",
        primaryHover: "#16A34A",

        border: "#2A2A2A",

        text: "#FFFFFF",
        textSecondary: "#A1A1AA",

        danger: "#EF4444",
        warning: "#F59E0B"
      },

      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px"
      },

      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,.45)",
        button: "0 4px 15px rgba(34,197,94,.25)"
      },

      transitionDuration: {
        250: "250ms"
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      }
    }
  },

  plugins: []
};

export default config;
