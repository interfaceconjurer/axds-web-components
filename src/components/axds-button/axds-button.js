import template from "./axds-button.html";
import common from "@salesforce-ux/sds-common/common.module.css";
import css from "./axds-button.css";

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
  }

  connectedCallback() {
    this.attributes.forEach((attr) => {
      const correctKey = attr.nodeName.replace(/ax-/g, "");
      this[correctKey] = attr.textContent;
    });
  }

  get label() {
    return this.getAttribute("ax-label");
  }

  get type() {
    return this.getAttribute("ax-type");
  }

  get size() {
    return this.getAttribute("ax-size");
  }

  set label(newLabel) {
    this.setAttribute("ax-label", newLabel);
    this.shadowRoot.querySelector(`[part~=axds-button]`).textContent = newLabel;
  }

  set type(newType) {
    this.setAttribute("ax-type", newType);
    this.shadowRoot.querySelector(`[part~=axds-button]`).setAttribute("ax-type", newType);
  }

  set size(newSize) {
    this.setAttribute("ax-size", newSize);
    this.shadowRoot.querySelector(`[part~=axds-button]`).setAttribute("ax-size", newSize);
  }
}

export { AXDSButton };
