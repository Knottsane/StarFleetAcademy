/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#04060f',
          800: '#070b1a',
          700: '#0a1024',
          600: '#0e1733',
          500: '#13204a',
          400: '#1b2d63',
        },
        lcars: {
          orange: '#ff9933',
          amber: '#ffcc66',
          gold: '#e6c068',
          cream: '#f4e9d8',
          peach: '#ffb38a',
          cyan: '#66d9ef',
          ice: '#cfe8ff',
        },
        accent: {
          ok: '#5fe0a0',
          warn: '#ffcc66',
          crit: '#ff6b6b',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', '"Rajdhani"', 'system-ui', 'sans-serif'],
        ui: ['"Rajdhani"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        lcars: '0 0 0 1px rgba(255,153,51,0.35), 0 0 24px rgba(255,153,51,0.12)',
        glow: '0 0 18px rgba(102,217,239,0.25)',
        deep: '0 20px 60px rgba(0,0,0,0.6)',
      },
      keyframes: {
        twinkle: {
          '0%,100%': { opacity: '0.15' },
          '50%': { opacity: '0.9' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        warp: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'scaleX(1)', opacity: '0' },
        },
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
        pulseRing: 'pulseRing 2.4s ease-out infinite',
        float: 'float 6s ease-in-out infinite',
        sweep: 'sweep 4s linear infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
        blink: 'blink 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
