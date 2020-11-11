const path    = require('path');
const hwp     = require('html-webpack-plugin');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );



module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },

    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://localhost:5000"
            }
        }
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
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {loader:'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath:'./',
                        useRelativePath: true
                    }},
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }

        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ]
}