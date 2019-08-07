const path = require('path');

module.exports = {
    entry: "../src/index.js",
    output: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/',
    module: {
        rules: [

        ]
    },
    resolve: {
        modules: [

        ],
        // 使用哪些扩展名
        extensions: [],
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
        noInfo: true, //only errors & warns on hot reload
        port: 8000,
        host: '127.0.0.1',
    }
}