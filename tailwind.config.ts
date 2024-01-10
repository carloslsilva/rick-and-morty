import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
// import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.zinc, DEFAULT: colors.zinc[600] }
      }
    }
  }
}

export default config
