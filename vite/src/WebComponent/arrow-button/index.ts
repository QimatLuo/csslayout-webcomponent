import STYLE from "./style.css?raw";
import TEMPLATE from "./template.html?raw";

export const tagName = "arrow-button";
export class WebComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `<style>${STYLE}</style>${TEMPLATE}`;

    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
