module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		'@fullhuman/postcss-purgecss': {
			content: ['./src/**/*.jsx', './src/**/*.html'],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		},
	},
};
