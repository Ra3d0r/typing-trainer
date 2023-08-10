module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		'@fullhuman/postcss-purgecss': {
			content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		},
	},
};
