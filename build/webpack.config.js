const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

function _resolve(relatedPath) {
    return path.resolve(__dirname, relatedPath)
}

function _join(relatedPath){
    return path.join(__dirname, relatedPath)
}

module.exports = {
    entry: "../src/index.js",
    output: {
        library: _resolve('dist'),
        libraryTarget: "umd",
        // webpack4都在output里面配置
        filename: "js/main.js",
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js|\.jsx?$/,
                use: { 
                    loader: 'babel-loader',
                    options: {
                        "presets":["@babel/react","@babel/env",]
                    }
                },
                exclude: /node_modules/,
            }
            
        ],
    },
    resolve: {
        // node模块
        modules: [
            'node_modules'
        ],
        // 使用哪些扩展名
        extensions: ['.js', '.jsx'],
        // 设置模块别名
        alias: {
            "@style": _join('style'),
            "@services": _join('./services')
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
        contentBase: _join('public'),
        compress: true, // enable gzip
        historyApiFallback: true,
        hot: true,// 热更新，基于HotModuleReplacementPlugin
        https: false,
        // noInfo: true, //only errors & warns on hot reload
        port: 3000,
        host: '127.0.0.1',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: _resolve('../index.html'),
            favicon: _resolve('../favicon.ico'),
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', //抽离出的css文件名称
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
}