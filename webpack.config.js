// const webpack = require("webpack");
const path = require("path");

const config = {
    mode: "production",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "public/js/"),
        publicPath: "/js/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: [path.resolve(__dirname, "node_modules")],
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[Path]__[name]__[local]___[hash:base64:24]'],
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        open: true
    },
    devtool: "eval-source-map"
};

module.exports = config;
