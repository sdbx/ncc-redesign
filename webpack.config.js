"use strict";

let fs = require('fs');
let webpack = require("webpack");

let cwd = __dirname;

let path = {
	context: `${cwd}/src`,
	output: `${cwd}/bin`,
	banner: `${cwd}/userscript.header.js`
};

// userscript.header.js
let userscript = fs.readFileSync(path.banner, { encoding: "utf8" });

module.exports = {
	context: path.context,
	entry: "./index",
	output: {
		path: path.output,
		filename: "ncc-redesign.user.js",
		banner: "commit"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /{node_modules|bower_components}/,
				loader: "babel!eslint"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!csslint"
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin(userscript, { raw: true })
	]
};
