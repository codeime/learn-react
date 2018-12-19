const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */
console.log(process.env.NODE_ENV);

var devMode = process.env.NODE_ENV !== "production";

module.exports = {
    
    entry: path.resolve(__dirname, '../src/index.jsx'),

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: { "@": path.resolve(__dirname, '../src') }
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, '../src')],
                loader: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
                include: [path.resolve(__dirname, '../src')],
            }
        ]
    },

    // mode: 'production',

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'all'
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: false
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ]

};