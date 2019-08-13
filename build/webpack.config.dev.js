const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');

function _join(relatedPath){
    return path.join(__dirname, relatedPath)
}

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        // proxy
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
        new webpack.HotModuleReplacementPlugin(),  //webpack内置的热更新插件
    ],
})