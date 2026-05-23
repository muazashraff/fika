import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--navy) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        brown: "rgb(var(--brown) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
        "text-light": "rgb(var(--text-light) / <alpha-value>)",
        "text-dark": "rgb(var(--text-dark) / <alpha-value>)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        lora: ["var(--font-lora)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
