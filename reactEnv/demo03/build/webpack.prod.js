const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = merge(base, {
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')]),
        new UglifyJSPlugin(),
    ]
})