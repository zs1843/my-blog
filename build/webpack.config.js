const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "../src/index.js",
    output: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js|jsx?$/,
                loaders: ['babel-loader'],
                query: {
                    presets: ['react', 'es2015']
                }
            }
            
        ],
    },
    resolve: {
        modules: [

        ],
        // 使用哪些扩展名
        extensions: ['', '.js', '.jsx'],
        // 设置模块别名
        alias: {

        }
    },
    performance: {

    },
    devtool: '',
    context: __dirname,
    devServer: {
        proxy: {
            "": ""
        },
        // 静态文件路径
        contentBase: path.join(__dirname, "public"),
        compress: true, // enable gzip
        historyApiFallback: true,
        hot: true,// 热更新，基于HotModuleReplacementPlugin
        https: false,
        // noInfo: true, //only errors & warns on hot reload
        port: 8080,
        host: '0.0.0.0',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}