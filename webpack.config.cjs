const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Used to deploy project on the free hosting on github

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  performance: {
    maxAssetSize: 500000, // this will limit the file size of the image on dev NOTE: that even it has a warning about the img size, you can't upload changes on github hosted site
  },
  devServer: { static: "./src" },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // This to ensure that '@' character will read on index.js file.
      },
      {
        test: /\.s[ac]ss$/i, // Matches .scss or .sass files
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Interprets CSS imports and URLs
          "sass-loader", // Compiles SCSS/Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]", // For image assets
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // this make sure that dist/ has the index.html for git hosting
    }),
  ],
};
