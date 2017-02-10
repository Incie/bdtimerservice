const webpack = require('webpack');

module.exports = {
    entry: './client/bootstrap-timingsapp.js',
    output: {
        path: './public/javascripts/',
        filename: 'timings.bundle.js'
    },
    module: {
        loaders: [
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
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    ]
};