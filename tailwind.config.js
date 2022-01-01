module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: (theme) => ({
      padding: {
        default: theme('spacing.4'),
        sm: theme('spacing.5'),
        lg: theme('spacing.6'),
        xl: theme('spacing.8'),
      },
    }),
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(/assets/hero-pattern.svg)',
      },
    },
  },
  plugins: [],
};
