import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        slate: '#0f172a',
        accent: '#7c3aed',
        glow: '#38bdf8',
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
