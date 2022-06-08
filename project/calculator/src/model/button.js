export class Button extends HTMLElement {
  constructor(title, value) {
    super();
    this.title = title;
    this.value = (value || this.hasAttribute('value')) ? (value || this.getAttribute('value')) : '';
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: inline-block;
        width: 20%;
      }
      button {
        width: 100%;
      }
    </style>
    <button>${title}</button>
    `;
  }

  connectedCallback() {
    this.dataset.value = this.value;
    // console.log('Connectd call back!')
    // console.log("Value: ", this.value);
  }
}

customElements.define('uc-button', Button);