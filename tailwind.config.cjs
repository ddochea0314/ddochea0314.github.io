/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts,svelte,css}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
