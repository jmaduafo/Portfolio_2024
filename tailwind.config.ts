import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        lightBg: "#F5E7D3",
        lightText: "#AC4800",
        darkBg: "#1D1C1C",
        darkText: "#F5E7D3",
        accent: "#552908",
      },
      screens: {
        xs: "480px",
        // => @media (min-width: 480px) { ... }

        sm: "768px",
        // => @media (min-width: 768px) { ... }

        md: "992px",
        // => @media (min-width: 992px) { ... }

        lg: "1200px",
        // => @media (min-width: 1200px) { ... }

        xl: "1320px",
        // => @media (min-width: 1320px) { ... }

        "2xl": "1920px",
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
