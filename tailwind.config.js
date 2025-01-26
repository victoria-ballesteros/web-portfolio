module.exports = {
  content: ["./**/*.{razor,cshtml,html}", "./wwwroot/**/*.html"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0F2743',
        'light-blue': '#5B90C4',
        'button-blue': '#7277f1',
        'dark-gray': '#1C1C1C',
        'black-background': '#0B0B0B',
        'red-ball': '#E64747',
        'yellow-ball': '#E6E22E',
        'green-ball': '#8FB935',
        'spotify-electric-purple': '#4300ff',
        'spotify-darkest-gradient': '#717371',
        'terminal-green': '#70e000',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
