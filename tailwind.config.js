/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#8B5CF6', // Electric Violet
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#06B6D4', // Cyan
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F472B6', // Pink
          foreground: '#FFFFFF',
        },
        dark: {
          950: '#020617', // Slate-950
          900: '#0f172a',
          800: '#1e293b',
        }
      },
      backgroundImage: {
        'gradient-bold': 'linear-gradient(to right, #8B5CF6, #06B6D4)',
        'mesh-gradient': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 50%)',
      },
    },
  },
  plugins: [],
}
