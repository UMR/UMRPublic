const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': [
            path.resolve(__dirname, 'node_modules/es6-shim/es6-shim.min.js'),
            path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
            path.resolve(__dirname, 'node_modules/zone.js/dist/zone.min.js'),
            path.resolve(__dirname, 'node_modules/zone.js/dist/long-stack-trace-zone.min.js')
        ],
        'vendor': [
            './app/vendor'
        ],
        'app': './app/boot'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "[name].chunk.bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor','polyfills']
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, 'app')
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
                from: './assets/css',
                to: 'assets/css'
            },
            {
                from: './node_modules/primeui',
                to: 'assets/primeui'
            },
            {
                from: './node_modules/quill/dist',
                to: 'assets/quill'
            },            
            {
                from: './assets/pdf',
                to: 'assets/pdf'
            },
            {
                from: './assets/js',
                to: 'assets/js'
            },

            {
                from: './assets/images/medicine.png',
                to: 'assets/images/medicine.png'
            },
            {
                from: './assets/images/dna.png',
                to: 'assets/images/dna.png'
            },
            {
                from: './assets/images/wheelchair.png',
                to: 'assets/images/wheelchair.png'
            },
            {
                from: './assets/images/medical-history.png',
                to: 'assets/images/medical-history.png'
            },
            {
                from: './assets/slides',
                to: 'assets/slides'
            },
            {
                from: './assets/slides/UMRHealthcareRecordsIntegratedSolution_files',
                to: 'assets/slides/UMRHealthcareRecordsIntegratedSolution_files'
            },
            {
                from: './assets/slides/UMRPresentation_files',
                to: 'assets/slides/UMRPresentation_files'
            },
            {
                from: './assets/doc',
                to: 'assets/doc'
            },
            {
                from: './assets/ppt',
                to: 'assets/ppt'
            }
        ]),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: './index.html'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:14248/', browser: 'chrome' }),
        new ExtendedDefinePlugin({
            APP_CONFIG: {
                ENV: "development"
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules/ },
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?tsconfig=tsconfig.json',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ],
                exclude: [/\.(spec|e2e|d)\.ts$/]
            },
            { loader: 'raw-loader', test: /\.(css|html)$/, exclude: ['./index.html'] },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 14248,
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: "localhost"
    }
};