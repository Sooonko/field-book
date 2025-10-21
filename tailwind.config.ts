import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        background: "#F3F4F6",
        "text-primary": "#111827",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Montserrat",
          "Pretendard",
        ],
        pretes: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
