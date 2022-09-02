/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
    theme: {
    extend: {},
    colors: {
      primary: "#0ed145",
      secondary: " #6C757D",
      success:    "#198754",
      info:       "#0ed145",
      warning:    "#FFC107",
      danger:     "#DC3545",
      light:      "#F8F9FA",
      dark:       "#212529" ,
      thirdgray:"#b0b0b0",
      vdreen:"#cc2020",
      transparent: 'transparent',
    }
  },
  plugins: [],
}
