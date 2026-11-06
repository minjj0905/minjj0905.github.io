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
      },
      // next-themes의 disableTransitionOnChange가 transition을 꺼 버리므로 keyframe으로 구현한다.
      keyframes: {
        'orbit-set': {
          from: { transform: 'rotate(0deg)', opacity: '1' },
          to: { transform: 'rotate(75deg)', opacity: '0' },
        },
        'orbit-rise': {
          from: { transform: 'rotate(-75deg)', opacity: '0' },
          to: { transform: 'rotate(0deg)', opacity: '1' },
        },
        'orbit-set-left': {
          from: { transform: 'rotate(0deg)', opacity: '1' },
          to: { transform: 'rotate(-75deg)', opacity: '0' },
        },
        'orbit-rise-right': {
          from: { transform: 'rotate(75deg)', opacity: '0' },
          to: { transform: 'rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'sun-set': 'orbit-set 0.6s ease-in-out both',
        'sun-rise': 'orbit-rise-right 0.6s ease-in-out both',
        'moon-rise': 'orbit-rise 0.6s ease-in-out both',
        'moon-set': 'orbit-set-left 0.6s ease-in-out both',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
