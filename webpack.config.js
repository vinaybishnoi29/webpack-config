const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      // This rule is not required for image import in css using url function, as images are handled automatically by webpack 5 now
      // However for importing image in react component or js file, this is required.
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // type: "asset/resource",
        // asset/resource puts images into separate directory and then images are requested when required
        // To inline images in javascript bundle, however this is only good for small images, otherwise initial bundle size will be too large
        // we can also use "asset" as a value, which will then automatically decide bwtween resource/inline based on size of image and default max limit in webpack
        // type: "asset/inline",
        type: "asset",
        // Here we are overriding the max size for inline image to 30kb instead of default 8 kb
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
};
