var webpack = require('webpack');
var path = require('path');


module.exports = {
    context: __dirname + '/src',
    entry: "./js/index.jsx",
    output: {
        path: __dirname + "/src/",
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,

                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],

                }

            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }

}