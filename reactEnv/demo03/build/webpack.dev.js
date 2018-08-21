const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');
const path = require('path');


module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        compress: true,
        port: 8080,
        host: '127.0.0.1',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //加载热替换插件
    ]
})