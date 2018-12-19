const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
let config = {

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
        }]
    },
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
        })
    ],

};

module.exports = (env, argv) => {
    if(argv.mode == 'production') {

        config.module.rules.push({
            test: /\.(less|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ],
            include: [path.resolve(__dirname, '../src')],
        });
        config.optimization.minimizer = [new UglifyJSPlugin()];
        config.plugins = config.plugins.concat([
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css"
            }),
            new CleanWebpackPlugin([path.resolve(__dirname, '../dist')])
        ]);

    } else {
        config.devtool = 'inline-source-map';
        config.module.rules.push({
            test: /\.(less|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ],
            include: [path.resolve(__dirname, '../src')],
        });
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.devServer = {
            contentBase: path.resolve(__dirname, "../dist"),
            compress: true,
            port: 8080,
            host: '127.0.0.1',
        };
    }
    return config;
};