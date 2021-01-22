import template from './welcome-card.html';
import css from './welcome-card.css';

class WelcomeCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        ${css}
      </style>

      ${template}
      `;
  }
}

export { WelcomeCard };
