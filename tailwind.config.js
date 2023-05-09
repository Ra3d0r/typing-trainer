/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
