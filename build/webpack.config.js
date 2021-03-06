const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

function _resolve(relatedPath) {
    return path.resolve(__dirname, relatedPath)
}

module.exports = {
    entry: "../src/index.js",
    output: {
        library: _resolve('dist'),
        // webpack4都在output里面配置
        libraryTarget: "umd",
        filename: "main.js",
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader", 
                    {
                        loader: 'css-loader', options: {
                            modules: {
                                mode: 'local',
                                localIdentName: 'my-blog--[name]-[local]', // [path][name][local]   use [hash:base64] for production
                                hashPrefix: 'hash',
                            }, // 随机
                        }
                    },
                    "less-loader",
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins:[
                                // require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')("last 100 versions"), //CSS浏览器兼容
                                // require('cssnano')()  //压缩css
                            ]
                        }
                    },
                    
                ],
                exclude: [
                    // 默认应用到全局的样式
                    _resolve(__dirname, 'node_modules'),
                    _resolve(__dirname, '../src/utils')
                ]
            },
            {
                test: /\.js|\.jsx?$/,
                use: [
                    { 
                        loader: 'babel-loader',
                        options: {
                            "presets":["@babel/react","@babel/env"]
                        }
                    },
                ],
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
            '@': path.join(__dirname, '..', 'src'),
        }
    },
    performance: {

    },
    context: __dirname,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: _resolve('../index.html'),
            favicon: _resolve('../favicon.ico'),
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', //抽离出的css文件名称
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 提供react模块
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
}