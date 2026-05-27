import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#050816',
        midnight: '#0a1028',
        neon: '#3b82f6'
      }
    }
  },
  plugins: []
}

export default config
