import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['var(--font-jetbrains)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white-primary': '#EDEDED',
        'black-primary': '#111111',
        'gray-primary': '#6B7280',
        'gray-button': '#21222C',
        'gray-button-sec': '#282A36',
        'blue-primary': '#00D8FF',
        'blue-secundary': '#1E4EFA',
        'pink-vscode': '#DC79C6',
        'blue-vscode': '#8BE3ED',
        'green-vscode': '#41F378',
        'orange-vscode': '#FCB162',
        'yellow-vscode': '#F1FA76',
        'gray-vscode': '#5372A4',
        'black-bg': '#28293D',
      },
      boxShadow: {
        'inner-lg': '1px -1px 13px 5px rgba(0, 0, 0, 0.3) inset',
      },
      animation: {
        'slow-animate':
          '8s cubic-bezier(0.445, 0.05, 0.55, 0.95) 1.2s infinite alternate none running cubic-1',
      },
      keyframes: {
        'cubic-1': {
          '0%': {
            transform: 'none',
          },
          '25%': {
            transform: 'translate3d(0, -35%, 0)',
          },
          '50%': {
            transform: 'translate3d(-20%, 0, 0)',
          },
          '75%': {
            transform: 'translate3d(0, -35%, 0)',
          },
          '100%': {
            transform: 'translate3d(20%, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
