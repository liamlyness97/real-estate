/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				urbanist: ['"Urbanist"', 'sans-serif']
			},
			colors: {
				prop: '#66b3ad'
			}
		}
	},

	plugins: []
};

module.exports = config;
