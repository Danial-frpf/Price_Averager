const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        popup: "./src/popup.jsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            // React Rules
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            // CSS and CSS modules rules
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            },
        ],
    },
    resolve: {
        // Search for react components
        extensions: ["", ".js", ".jsx"],
    },
    plugins: [
        // Adds html to built
        new HtmlWebpackPlugin({
            template: "./src/popup.html",
            filename: "popup.html",
        }),
        // Copy all files in public folder to built as it is
        new CopyPlugin({
            patterns: [{ from: "public" }],
        }),
    ],
};
