const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    entry: {
        'polyfills-vendor': [
            path.resolve(__dirname, 'node_modules/es6-shim/es6-shim.min.js'),
            path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
            path.resolve(__dirname, 'node_modules/zone.js/dist/zone.min.js'),            
            './app/vendor'
        ],
        'app': './app/boot.aot'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "[name].chunk.bundle.js"
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills-vendor']
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
       new CopyWebpackPlugin([
            {
                from: './assets/images',
                to: 'assets/images'
            },
            {
                from: './node_modules/bootstrap/dist',
                to: 'assets/bootstrap'
            },
            {
                from: './node_modules/font-awesome',
                to: 'assets/font-awesome'
            },
            {
                from: './node_modules/primeui',
                to: 'assets/primeui'
            },
            {
                from: './assets/css',
                to: 'assets/css'
            }, ,
            {
                from: './assets/js',
                to: 'assets/js'
            }
       ]),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: './index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new UglifyJsPlugin({
            beautify: false,
            minimize: true,
            sourceMap: false,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\./,
            threshold: 0,
            minRatio: 0.8
        })
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?tsconfig=tsconfig.prod.json',
                    'angular2-router-loader?genDir=app/compiled/app&aot=true'
                ],
                exclude: [/\.(spec|e2e|d)\.ts$/]
            },
            { loader: 'raw', test: /\.(css|html)$/, exclude: ['./index.html'] },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: false,
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }
};