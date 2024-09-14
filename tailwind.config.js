/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'young-serif': ['Young Serif', 'serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        stone: {
          100: '#f3e6d8',
          150: '#e4ded8',
          600: '#5f574e',
          800: '#854632'
        },
        brown: {
          800: '#854632'
        },
        rose: {
          50: '#fff5fa',
          800: '#7b284f'
        }
      },
      screens: {
        desktop: '1440px'
      }
    }
  },
  plugins: []
}
