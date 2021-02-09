// import SLDS 3.0 colors and Salesforce UX packages
import colorVariables from "../lib/slds3-colors/colorVariables";

import "@salesforce-ux/sds-guidelines/lib/components/define";
import "@salesforce-ux/sds-components/lib/define";

// set up color variables
colorVariables.map((variable) => {
  const [name, value] = variable.split(": ");
  document.documentElement.style.setProperty(name, value.slice(0, -1));
});

// import and register custom elements
import { WelcomeCard } from "../src/components/welcome-card/welcome-card";
import { AXDSButton } from "../src/components/axds-button/axds-button";

customElements.define("welcome-card", WelcomeCard);
customElements.define("axds-button", AXDSButton);
