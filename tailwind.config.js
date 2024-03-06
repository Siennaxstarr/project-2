/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",      // Include HTML files in the public directory
    "./scripts/**/*.js",       // Include JavaScript files in the scripts directory
    "./src/styles/**/*.css",   // Include CSS files in the src/styles directory
    "./views/**/**/*.handlebars",
    "./views/**/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

