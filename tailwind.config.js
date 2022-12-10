/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
			backgroundImage: {
				'tshirt': "url('/src/assets/tshirt.avif')",
			}
		},
  },
  plugins: [],
}
