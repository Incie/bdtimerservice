const webpack = require('webpack');

module.exports = {
    entry: './public/javascripts/timingsvue.js',
    output: {
        path: './public/javascripts/',
        filename: 'timings.bundle.js'
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