const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

// glob through all folders
const root = path.resolve(__dirname, "../../");

// Find all image assets and clone to root folder so storybook can load them correctly
glob(path.resolve(root, "node_modules/@salesforce-ux/**/**/images/"), (err, folders) => {
  if (folders.length < 1 || err) {
    console.error("Could not find any image files under @salesforce-ux");
  } else {
    for (const folder of folders) {
      fs.copySync(folder, path.join(root, "public/images/"));
    }
  }
});
