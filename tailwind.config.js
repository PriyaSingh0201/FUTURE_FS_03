/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nike: {
          black: '#000000',
          white: '#FFFFFF',
          orange: '#FF6900',
          red: '#E74C3C',
          blue: '#3498DB',
          gray: '#F5F5F5',
          'dark-gray': '#111111',
          'light-gray': '#F7F7F7'
        }
      },
      fontFamily: {
        'nike': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'nike-futura': ['Futura', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}