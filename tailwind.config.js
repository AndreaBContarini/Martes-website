/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'martes-green': '#4ADE80',
        'martes-dark': '#050505',
        'card-bg': '#0A0A0A',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'logo-reveal': 'logoReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'text-reveal': 'textReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'nav-slide-down': 'navSlideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        logoReveal: {
          to: { opacity: '1', transform: 'scale(1)' },
        },
        textReveal: {
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        navSlideDown: {
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
