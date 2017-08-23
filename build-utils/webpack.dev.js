const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: ['./src/assets/scss/main.scss'],    
    devtool: "eval-source-map",    
    module: {
        rules: [
                {
                    test: /\.jsx?$/,
                    use: "babel-loader",
                    exclude: /node_modules/                    
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',                    
                        use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {                                
                                name: './fonts/[name].[ext]'
                            }
                        }

                    ]                   
                }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/main.css')
    ]
}

module.exports = config;