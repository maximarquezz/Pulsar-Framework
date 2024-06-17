/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './css/*.css',
    './js/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        'space-grotesk': ['Space Grotesk', 'comic-sans'],
      },
      animation: {
        'move-up-down': 'moveUpDown 5s ease-in-out infinite',
        'move-up-down-alter': 'moveUpDownAlter 7s ease-in-out infinite',
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(10px)',
          },
        },
        moveUpDownAlter: {
          '0%, 100%': {
            transform: 'translateY(10px)',
          },
          '50%': {
            transform: 'translateY(0)',
          }
        }
      },
    },
  },
  plugins: [],
}

