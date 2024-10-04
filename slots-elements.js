import { LitElement, html, css } from 'lit';

export class SlotsElement extends LitElement {
  static get styles() {
    return css`
      ::slotted(*) {
        font-family: Roboto;
      }
      p::slotted(*) {
        color: blue;
      }
      div ::slotted(*) {
        color: red;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
      <div><slot name="hi"></slot></div>
    `;
  }
}

customElements.define('slots-element', SlotsElement);