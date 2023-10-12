import type { Config } from "tailwindcss";

// "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#004DE9",
          secondary: "#31A0D8",
          accent: "#D83192",
          neutral: "#EA8D23",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
export default config;
