import STYLE from "./style.css?raw";
import TEMPLATE from "./template.html?raw";

export const tagName = "spinner";
export class WebComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `<style>${STYLE}</style>${TEMPLATE}`;

    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }

  static get observedAttributes() {
    return ["size"];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const dom = this.shadowRoot?.querySelector<HTMLDivElement>(".spinner");
    dom!.style.height = newValue;
    dom!.style.width = newValue;
  }
}
