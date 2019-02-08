const path = require('path');
var JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
	entry: './raws/scripts/main.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	plugins: [
		new JavaScriptObfuscator ({
			rotateUnicodeArray: true
		})
	]
};