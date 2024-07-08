const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
//const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.config.js')

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            //new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all',
        }
    },
})