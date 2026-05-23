import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071826',
        sand: '#E9DFC8',
        white: '#FFFFFF',
        ocean: '#6FAED6',
        warmGray: '#D9D9D9'
      },
      maxWidth: {
        site: '1440px',
        content: '1280px'
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'Inter', 'sans-serif']
      },
      letterSpacing: {
        luxury: '0.38em',
        cta: '0.14em'
      },
      borderRadius: {
        luxury: '1.75rem'
      },
      boxShadow: {
        glow: '0 0 48px rgba(111, 174, 214, 0.18)',
        soft: '0 30px 80px rgba(0, 0, 0, 0.32)'
      },
      transitionTimingFunction: {
        ios: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};

export default config;
