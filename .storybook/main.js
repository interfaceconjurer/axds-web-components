const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../node_modules/@salesforce-ux/**/*.stories.js",
  ],

  webpackFinal: (config) => {
    // remove their css loader...
    const rules = config.module.rules.filter((rule) => !rule.test.toString().match(".css"));

    rules.push({
      test: /\.css$/,
      use: ["raw-loader"],
      include: [path.resolve(__dirname, "../src/components"), /\.module\.css$/],
    });

    rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: [
        path.resolve(__dirname, "../src"),
        path.resolve(__dirname, "../node_modules/@salesforce-ux"),
        // Comment out for npm link
        // path.resolve(__dirname, "../../salesforce-design-system"),
      ],
      exclude: [path.resolve(__dirname, "../src/components"), /\.module\.css$/],
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
