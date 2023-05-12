import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const devtool = devMode ? 'source-map' : undefined;
const target = devMode ? 'web' : 'browserslist';

export default {
	mode,
	devtool,
	target,

	entry: './src/index.js',

	output: {
		filename: devMode ? '[name].js' : '[name].[contenthash].js',
		path: path.resolve(path.dirname('./'), 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[name][ext]',
	},

	devServer: {
		static: './dist',
		hot: true,
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	optimization: {
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},

			{
				test: /\.s?css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},

			{
				test: /\.html$/,
				loader: 'html-loader',
			},

			{
				test: /\.woff2?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},

			{
				test: /\.(jpe?g|png|webp|gif|svg)$/,
				use: devMode
					? []
					: [
							{
								loader: 'image-webpack-loader',
								options: {
									mozjpeg: {
										progressive: true,
									},
									optipng: {
										enabled: false,
									},
									pngquant: {
										quality: [0.65, 0.9],
										speed: 4,
									},
									gifsicle: {
										interlaced: false,
									},
									webp: {
										quality: 75,
									},
								},
							},
					  ],
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(path.dirname('./'), 'public', 'index.html'),
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new Dotenv({
			path: './.env.local',
		}),
	],
};
