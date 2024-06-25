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
        // Primary
        "eb-dark-blue": "hsl(233, 26%, 24%)",
        "eb-lime-green": "hsl(136, 65%, 51%)",
        "eb-bright-cyan": "hsl(192, 70%, 51%)",

        // Neutral
        "eb-grayish-blue": "hsl(233, 8%, 62%)",
        "eb-light-grayish-blue": "hsl(220, 16%, 96%)",
        "eb-very-light-gray": "hsl(0, 0%, 98%)",
        "eb-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        publicsans: ["Public Sans", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      fontWeight: {
        normal: "300",
        semibold: "400",
        bold: "700",
      },
      screens: {
        sm: "900px",
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        // "samplebg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [],
};
export default config;
