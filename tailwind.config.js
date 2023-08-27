/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
	darkMode: 'media',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			keyframes: {
				select: {
					'0%': {'background-color': 'rgb(96 165 250)'},
					'100%': {'background-color': 'transparent'},
				},
			},
			animation: {
				select: 'select 1.2s ease-in-out infinite',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
