const webpack = require('webpack');

module.exports = {
    entry: './public/javascripts/timingsvue.js',
    output: {
        path: './public/javascripts/',
        filename: 'timings.bundle.js'
    },
    module: {
        loaders: [
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
        }),
    ]
};