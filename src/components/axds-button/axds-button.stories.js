import objToAttr from "../../../lib/utils/obj-to-attr";

export default {
  title: "AX Pattern Library/Button",
};

// We create a “template” of how args map to rendering
const Template = (args) => `
  <axds-button ${objToAttr(args)} />
`;

// Each story then reuses that template
export const Primary = Template.bind();
Primary.args = {
  "ax-type": "primary",
  "ax-size": "large",
  "ax-label": "'👹 Primary Cringe God 👹'",
};

export const Secondary = Template.bind();

Secondary.args = {
  "ax-type": "secondary",
  "ax-size": "large",
  "ax-label": "'🔥 Saucey Bossy Buttons 🔥'",
};
