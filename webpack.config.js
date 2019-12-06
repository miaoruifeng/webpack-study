const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html'
})

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, './src/index.js'),
	output: {
		path: path.join(__dirname, './dist'), // 输出文件的存放路径
		filename: 'bundle.js' // 输出文件的名称
	},
	plugins: [htmlPlugin],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2/,
				use: ['url-loader?limit=17260']
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
}