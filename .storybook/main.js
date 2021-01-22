const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    "../node_modules/@salesforce-ux/**/*.stories.js",
  ],

  webpackFinal: (config) => {
    // remove their css loader...
    const rules = config.module.rules.filter((rule) => !rule.test.toString().match(".css"));

    // ...and replace with our own.
    rules.push({
      test: /\.css$/,
      use: ["raw-loader"],
      include: [
        path.resolve(__dirname, "../src/components"),
        path.resolve(__dirname, "../node_modules"),
        path.resolve(__dirname, "../node_modules/@salesforce-ux"),
      ],
      // lightdom assets go in exclude
      exclude: [],
    });

    rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      // lightdom assets go in include
      include: path.resolve(__dirname, "../src"),
      exclude: path.resolve(__dirname, "../src/components"),
    });

    // markdown loader
    rules.push({
      test: /\.md$/,
      use: ["markdown-loader"],
    });

    // assign the updated rules to the config
    config.module.rules = rules;

    // return the config
    return config;
  },
};
