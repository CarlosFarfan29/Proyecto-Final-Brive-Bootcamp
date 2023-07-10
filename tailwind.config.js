/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-color': 'var(--dark)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'terciary-color': 'var(--terciary-color)',
        'orange-color': 'var(--orange)',

      },
    },
  },
  plugins: [],
}

