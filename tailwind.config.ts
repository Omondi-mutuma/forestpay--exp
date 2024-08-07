import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-green-mesh-gradient': 'radial-gradient(circle, #013220 0%, #024b30 100%)',
      },
      colors: {
        green: {
          500: '#30AF5B',
          900: '#292C27',
        },
        gray: {
          100: '#EEEEEE',
          200: '#A2A2A2',
          300: '#7B7B7B',
          500: '#585858',
          900: '#141414',
        },
        orange: {
          500: '#FF814C',
        },
        blue: {
          700: '#021639',
        },
        yellow: {
          500: '#FEC601',
        },
      },
    },
  },
  plugins: [],
};
export default config;
