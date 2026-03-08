import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#201B17',
        accent: '#D4AF37',
        'accent-light': '#F4CF57',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'border-beam': 'border-beam calc(var(--duration)) infinite linear',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
        },
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
