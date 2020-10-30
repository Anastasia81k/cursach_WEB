const path    = require('path');
const hwp     = require('html-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
            {
                test: /\.filename$/,
                use: ["loader-b", "loader-a"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ]
}