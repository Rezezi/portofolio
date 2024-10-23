import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Menggunakan CSS variable untuk latar belakang
        foreground: "var(--foreground)",  // Menggunakan CSS variable untuk teks
      },
    },
  },
  plugins: [],
};

export default config;
