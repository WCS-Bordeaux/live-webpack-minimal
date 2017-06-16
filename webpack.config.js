'use strict'

const webpack = require('webpack')

module.exports = (() => {

    const config = {}

    config.entry = {
        app: './main.js'
    }

    config.output = {
        path: __dirname + '/',
        filename: '[name].js'
    }

    config.module = {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }

    return config

})()