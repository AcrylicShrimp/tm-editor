import path from 'path';

import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const main: webpack.Configuration = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	target: 'electron-main',
	node: {
		__dirname: false,
	},
	entry: {
		main: path.resolve(__dirname, 'app', 'main', 'index.ts'),
		preload: path.resolve(__dirname, 'app', 'preload', 'index.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/i,
				exclude: /\/node_modules\//,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
	},
};

const renderer: webpack.Configuration = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	target: 'electron-renderer',
	node: {
		__dirname: false,
	},
	entry: {
		editor: path.resolve(__dirname, 'app', 'renderer', 'index.tsx'),
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'renderer.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				exclude: /\/node_modules\//,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: 'style-loader', // Creates `style` nodes from JS strings
					},
					{
						loader: 'css-loader', // Translates CSS into CommonJS
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: 'style-loader', // Creates `style` nodes from JS strings
					},
					{
						loader: 'css-loader', // Translates CSS into CommonJS
					},
					{
						loader: 'sass-loader', // Compiles Sass to CSS
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'app', 'renderer', 'index.html'),
		}),
	],
	resolve: {
		extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
	},
};

export default [main, renderer];
