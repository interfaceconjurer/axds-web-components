const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  webpackFinal: (config) => {
    // remove their css loader...
    const rules = config.module.rules.filter(
      (rule) => !rule.test.toString().match(".css")
    );

    // ...and replace with our own.
    rules.push({
      test: /\.css$/,
      use: ["raw-loader"],
      include: [
        path.resolve(__dirname, "../src/components"),
        path.resolve(__dirname, "../node_modules"),
      ],
    });

    rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../src"),
      exclude: path.resolve(__dirname, "../src/components"),
    });

    // assign the updated rules to the config
    config.module.rules = rules;

    // return the config
    return config;
  },
};
