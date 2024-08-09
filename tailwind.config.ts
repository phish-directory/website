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
        bush: {
          '50': '#fcf8f0',
          '100': '#f9efdb',
          '200': '#f1ddb7',
          '300': '#e8c589',
          '400': '#dea459',
          '500': '#d99142',
          '600': '#c9742d',
          '700': '#a75b27',
          '800': '#864926',
          '900': '#6c3d22',
          '950': '#3a1e10',
        },
        dust: {
          '50': '#f9f5f3',
          '100': '#f1e9e3',
          '200': '#e1d1c7',
          '300': '#ccaf9e',
          '400': '#ba8f7d',
          '500': '#ac7763',
          '600': '#9f6657',
          '700': '#84534a',
          '800': '#6c4540',
          '900': '#583a36',
          '950': '#2f1d1b',
        },

        viking: {
          '50': '#effbfc',
          '100': '#d7f4f6',
          '200': '#b3e8ee',
          '300': '#7fd6e1',
          '400': '#5cc3d3',
          '500': '#289eb2',
          '600': '#248096',
          '700': '#23687b',
          '800': '#255665',
          '900': '#234856',
          '950': '#122f3a',
        },
      },
    },
  },
  plugins: [],
}
export default config
