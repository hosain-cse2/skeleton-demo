const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
              test: /\.(ts|tsx|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.css$/,
              use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: {
                        localIdentName: "[local]---[hash:base64:5]"
                      },
                      importLoaders: 1
                    }
                  },
                  {
                      loader: "postcss-loader",
                      options: {
                        ident: "postcss",
                        plugins: () => [autoprefixer()]
                      }
                  }
              ]
          },
          {
            test: /\.(png|jpg|gif)$/i,
            loader: "url-loader?limit=8192&name=images/[name].[ext]"
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Onsite Test",
            filename: "index.html",
            template: "./src/template/index.html",
            inject: false
        })
    ],
    devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true
    },
    resolve: {
      extensions: [".jsx", ".js", ".tsx", ".ts", ".sass", ".scss", ".css"]
    }
};