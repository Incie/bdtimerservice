const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client/bootstrap-timingsapp.js'),
    output: {
        path: path.resolve(__dirname, 'public/javascripts/'),
        filename: 'timings.bundle.js'
    },
    // eslint: {
    //     configFile: '.eslintrc.json'
    // },
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     loader: 'eslint-loader',
            //     exclude: './client/bootstrap-timingsapp.js'
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]
};