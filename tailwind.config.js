import typography from '@tailwindcss/typography';

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: ['grid-cols-[20fr_1fr]'],
  theme: {
    extend: {}
  },
  plugins: [typography]
};

export default config;
