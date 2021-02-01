const colors = require("./colorData.js");

const colorVariables = [];

Object.keys(colors).forEach((groupKey) => {
  const group = colors[groupKey];
  Object.keys(group).forEach((variantKey) => {
    const variant = group[variantKey];
    Object.keys(variant).forEach((shadeKey) => {
      const color = variant[shadeKey];
      colorVariables.push(`--slds-g-${groupKey}-${variantKey}-${shadeKey}: ${color};`);
    });
  });
});

module.exports = colorVariables;
