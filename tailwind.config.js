/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      animation: {
        'float-slow': 'float 25s ease-in-out infinite',
        'mesh-1': 'mesh1 20s ease-in-out infinite',
        'mesh-2': 'mesh2 22s ease-in-out infinite',
        'mesh-3': 'mesh3 24s ease-in-out infinite',
        'mesh-4': 'mesh4 26s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'pulse-slow-2': 'pulse 5s ease-in-out infinite',
        'pulse-slow-3': 'pulse 6s ease-in-out infinite',
        'drift': 'drift 40s linear infinite',
        'orbit': 'orbit 35s linear infinite',
        'spiral': 'spiral 45s ease-in-out infinite',
        'wave': 'wave 30s ease-in-out infinite',
        'float-micro': 'floatMicro 25s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.1' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.2' },
        },
        mesh1: {
          '0%, 100%': { transform: 'translateX(0%) translateY(0%) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateX(20%) translateY(-10%) scale(1.1)', opacity: '0.15' },
        },
        mesh2: {
          '0%, 100%': { transform: 'translateX(0%) translateY(0%) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translateX(-15%) translateY(15%) scale(0.9)', opacity: '0.3' },
        },
        mesh3: {
          '0%, 100%': { transform: 'translateX(0%) translateY(0%) scale(1)', opacity: '0.1' },
          '50%': { transform: 'translateX(25%) translateY(-20%) scale(1.2)', opacity: '0.2' },
        },
        mesh4: {
          '0%, 100%': { transform: 'translateX(0%) translateY(0%) scale(1)', opacity: '0.2' },
          '50%': { transform: 'translateX(-20%) translateY(10%) scale(0.8)', opacity: '0.35' },
        },
        drift: {
          '0%': { transform: 'translateX(-50px) translateY(-50px) rotate(0deg)', opacity: '0.1' },
          '25%': { transform: 'translateX(200px) translateY(100px) rotate(90deg)', opacity: '0.2' },
          '50%': { transform: 'translateX(400px) translateY(-100px) rotate(180deg)', opacity: '0.15' },
          '75%': { transform: 'translateX(600px) translateY(150px) rotate(270deg)', opacity: '0.1' },
          '100%': { transform: 'translateX(800px) translateY(-50px) rotate(360deg)', opacity: '0.05' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)', opacity: '0.15' },
          '25%': { transform: 'rotate(90deg) translateX(150px) rotate(-90deg)', opacity: '0.2' },
          '50%': { transform: 'rotate(180deg) translateX(150px) rotate(-180deg)', opacity: '0.1' },
          '75%': { transform: 'rotate(270deg) translateX(150px) rotate(-270deg)', opacity: '0.2' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)', opacity: '0.15' },
        },
        spiral: {
          '0%': { transform: 'rotate(0deg) translateX(0px) scale(0.5)', opacity: '0.1' },
          '25%': { transform: 'rotate(90deg) translateX(100px) scale(0.8)', opacity: '0.2' },
          '50%': { transform: 'rotate(180deg) translateX(200px) scale(1.2)', opacity: '0.15' },
          '75%': { transform: 'rotate(270deg) translateX(300px) scale(0.9)', opacity: '0.1' },
          '100%': { transform: 'rotate(360deg) translateX(400px) scale(0.3)', opacity: '0.05' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.15' },
          '25%': { transform: 'translateY(-100px) translateX(200px) rotate(45deg)', opacity: '0.2' },
          '50%': { transform: 'translateY(50px) translateX(400px) rotate(90deg)', opacity: '0.1' },
          '75%': { transform: 'translateY(-150px) translateX(600px) rotate(135deg)', opacity: '0.2' },
        },
        floatMicro: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)', opacity: '0.05' },
          '33%': { transform: 'translateY(-30px) translateX(20px) scale(1.5)', opacity: '0.1' },
          '66%': { transform: 'translateY(20px) translateX(-15px) scale(0.8)', opacity: '0.08' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
