export default (element, name) => {
  Array.prototype.forEach.call(element.attributes, (attr) => {
    element.shadowRoot.querySelector(`[part~=${name}]`).setAttribute(attr.nodeName, attr.textContent);
  });
};
