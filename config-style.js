import { html, css, LitElement } from 'lit';

class ConfigStyle extends LitElement {
  static get styles() {
    return css`
      :host {
        color: var(--themeColor, yellowgreen);
        font-family: Arial, sans-serif;
        border: 1px solid #ccc;
        padding: 16px;
        display: block;
        width: 300px;
      }
    `;
  }

  render() {
    return html`
      <section>
        <h2>Estilos configurables</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr />
      </section>
    `;
  }
}

customElements.define('config-style', ConfigStyle);