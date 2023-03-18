import { AccordionItem } from "../accordion-item";
import STYLE from "./style.css?raw";
import TEMPLATE from "./template.html?raw";

export class Accordion extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `<style>${STYLE}</style>${TEMPLATE}`;

    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }

  _step = -1;
  get step() {
    return this._step;
  }
  set step(n: number) {
    this.querySelectorAll<AccordionItem>(`[slot="items"]`).forEach((dom, i) => {
      const header = dom.shadowRoot?.querySelector<HTMLDivElement>(".header");
      if (n <= 0) {
        header!.style.pointerEvents = "";
      } else {
        header!.style.pointerEvents = "none";
        dom.expanded = i + 1 === n;
      }
    });
  }
}
