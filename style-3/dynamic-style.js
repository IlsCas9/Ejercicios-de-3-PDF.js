import { html, css, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

export class DynamicStyle extends LitElement {
  static get properties() {
    return {
      classes: { type: Object },
      styles: { type: Object }
    };
  }

  static get styles() {
    return css`
      .mydiv {
        background-color: blue;
      }

      .someclass {
        border: 1px solid red;
      }
    `;
  }

  constructor() {
    super();
    // Definimos clases dinámicas
    this.classes = { mydiv: true, someclass: true };
    // Definimos estilos dinámicos
    this.styles = { color: 'green', fontFamily: 'Roboto' };
  }

  render() {
    return html`
      <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
        Some content
      </div>
    `;
  }
}

customElements.define('dynamic-style', DynamicStyle);