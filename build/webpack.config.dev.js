const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');

function _join(relatedPath){
    return path.join(__dirname, relatedPath)
}

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map', // 显示编译前文件 方便调试
    devServer: {
        // proxy
        proxy: {
            "/api":  {
                target: 'http://www.zs1843.top/',
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
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
})