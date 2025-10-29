const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
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
          filename: "./src/assets/images/[name][ext]", // For image assets
        },
      },
    ],
  },
};
