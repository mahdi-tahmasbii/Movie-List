import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
      },
      colors: {
        // Absolute Colors
        white: "#FFFFFF",
        black: "#000000",
        // Red Shades
        red45: "#E50000",
        red50: "#FF0000",
        red55: "#FF1919",
        red60: "#FF3333",
        red80: "#FF9999",
        red90: "#FFCCCC",
        red95: "#FFE5E5",
        red99: "#FFFAFA",
        // Black Shades
        black06: "#0F0F0F",
        black08: "#141414",
        black10: "#1A1A1A",
        black12: "#1F1F1F",
        black15: "#262626",
        black20: "#333333",
        black25: "#404040",
        black30: "#4C4C4C",
        // Grey Shades
        grey60: "#999999",
        grey65: "#A6A6A6",
        grey70: "#B3B3B3",
        grey75: "#BFBFBF",
        grey90: "#E4E4E7",
        grey95: "#F1F1F3",
        grey97: "#F7F7F8",
        grey99: "#FCFCFD",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
