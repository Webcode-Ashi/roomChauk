/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8f0',
          100: '#faefd8',
          200: '#f5dba9',
          300: '#efc277',
          400: '#e8a84d',
          500: '#C9A96E',
          600: '#b8924a',
          700: '#9a7538',
          800: '#7d5e30',
          900: '#664e29',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#a8a8a8',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1f1f1f',
          900: '#1A1A1A',
        },
        cream: '#F8F5F0',
      },
       fontFamily: {
  serif: ["Merriweather", "serif"],
  sans: ["Inter", "system-ui", "sans-serif"],
  mono: ["JetBrains Mono", "monospace"],
},
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A96E 0%, #e8c887 50%, #C9A96E 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #2d2d2d 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(201, 169, 110, 0.2)',
        'gold-lg': '0 8px 50px rgba(201, 169, 110, 0.3)',
        'dark': '0 4px 30px rgba(0,0,0,0.3)',
        'premium': '0 20px 60px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
