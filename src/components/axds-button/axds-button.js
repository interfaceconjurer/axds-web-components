import template from "./axds-button.html";
import common from "@salesforce-ux/sds-common/common.module.css";
import css from "./axds-button.css";
import addAttrToComponent from "../../../lib/utils/add-attrs-to-child";

class AXDSButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        ${common}
        ${css}
      </style>

      ${template}
      `;

    // Pass attributes from web component to child
    addAttrToComponent(this, "axds-button");
  }
}

export { AXDSButton };
