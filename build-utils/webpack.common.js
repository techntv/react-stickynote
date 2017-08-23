const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config ={
    entry: ["./src/index.js"],
    output: {
        filename: "js/bundle.js",
        path: commonPaths.outputPath
    },
    module:{
        rules: [
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: './images/[name].[ext]'
                        }
                    }
                ]

            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        HtmlWebpackPluginConfig
    ]
}

module.exports = config;