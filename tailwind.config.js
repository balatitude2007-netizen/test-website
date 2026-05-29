/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#000000', // True black for deepest background
          dark: '#0A0A0A', // Slightly lighter for cards/sections
          gray: '#111111', // Borders and subtle highlights
          blue: '#0070F3', // Vercel blue
          cyan: '#32E0C4', // Neon accent
          purple: '#7928CA', // Deep accent
          pink: '#FF0080', // Vibrant accent
        },
        background: {
          dark: '#000000',
          card: '#0A0A0A',
        },
        text: {
          primary: '#EDEDED', // Crisp off-white
          secondary: '#A1A1AA', // Subtle gray
          muted: '#666666', // Deep gray
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(90deg, #32E0C4 0%, #0070F3 50%, #7928CA 100%)',
        'gradient-glow': 'conic-gradient(from 180deg at 50% 50%, #7928CA 0deg, #FF0080 180deg, #0070F3 360deg)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
        },
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
    },
  },
  plugins: [],
}
