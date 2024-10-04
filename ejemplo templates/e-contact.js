import { LitElement, html } from 'lit';

class EContact extends LitElement {
  static get properties() {
    return {
      email: { type: String },
      nombre: { type: String }
    };
  }

  render() {
    return html`
      <div>
        <p>${this.nombre}</p>
        <a href="mailto:${this.email}">Ver más</a>
      </div>
    `;
  }
}

customElements.define('e-contact', EContact);