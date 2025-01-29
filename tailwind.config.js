/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B', 
          600: '#744838'
        }
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Karla: ['Karla', 'sans-serif']
      },
      keyframes: {
        // Hiệu ứng trượt ra cho thanh menu khi ấn vào icon menu ở màn hình nhỏ
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          //Hiệu ứng cho nút Explore mug
          from: {opacity: 0},
          to: {opacity: 1}
        }
      },
      // Tích hợp hiệu ứng vào animation
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out'
      }
    }
  },
  plugins: [],
}
