import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFF",
          button: "#AAC6FC",
          tab: "#CCC",
          "tab-active": "#F6E258",
          secondary: "#FCAAE5",
          gray: "#D9D9D9",
          "gray-light": "#C1C1C1",
          "yellow-light": "#F3F6E6",
        },
        border: {
          DEFAULT: "#000",
          input: "#939393",
          heading: "#505050",
          card: "#383A48",
        },
        text: {
          DEFAULT: "#000",
          paragraph: "#505050",
          muted: "#696969",
          "sub-heading": "#383A48",
          label: "#383A48",
          accent: "#1E4CA1",
          "sub-heading-2": "#232323",
          "label-2": "#676769",
        },
        divider: {
          DEFAULT: "#C4C4C4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
