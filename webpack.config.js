var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/\.svg$/)
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssCssnext = require('postcss-cssnext')

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        main: [
            './src/Root.js',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ]
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: '/js/root.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                //loader: 'babel!eslint-loader', exclude: /node_modules/,
                loader: 'babel', exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-runtime', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:8]!sass',
                    //'css?modules&importLoaders=1&localIdentName=_[hash:base64:3]!sass',
                    //'autoprefixer'
                ]
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    },
    devServer: {
        historyApiFallback: true,
        hot: true
    }
};