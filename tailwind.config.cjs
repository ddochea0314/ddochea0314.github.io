/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts,svelte,css}'],
	theme: {
		screens: {
			sm: '640px', // => @media (min-width: 640px) { ... }
			md: '768px', // => @media (min-width: 768px) { ... }
			lg: '1024px' // => @media (min-width: 1024px) { ... }
			// xl (1280px) 와 2xl (1536px) 은 사용안함처리
		},
		container: {
			center: true
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						// maxWidth: '80ch', // add required value here
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('daisyui')
	]
};
