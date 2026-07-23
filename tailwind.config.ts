import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Pretendard', ...fontFamily.sans],
      gmarket: ['GmarketSans', ...fontFamily.sans],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', ...fontFamily.mono],
    },
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        bg: {
          base: 'rgb(var(--bg-base) / <alpha-value>)',
          subtle: 'rgb(var(--bg-subtle) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--text-tertiary) / <alpha-value>)',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
        glass: 'rgb(var(--glass) / <alpha-value>)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s ease-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
