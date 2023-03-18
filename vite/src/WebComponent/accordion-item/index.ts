import STYLE from "./style.css?raw";
import TEMPLATE from "./template.html?raw";

export class AccordionItem extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `<style>${STYLE}</style>${TEMPLATE}`;

    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }

  connectedCallback() {
    this.shadowRoot
      ?.querySelector<HTMLElement>(".header")
      ?.addEventListener("click", toggleExpand(this));
  }
  disconnectedCallback() {
    this.shadowRoot
      ?.querySelector<HTMLElement>(".header")
      ?.removeEventListener("click", toggleExpand(this));
  }

  get expanded() {
    return (
      this.shadowRoot
        ?.querySelector(".item")
        ?.classList.contains("item--expanded") || false
    );
  }
  set expanded(b: boolean) {
    const classList = this.shadowRoot?.querySelector(".item")?.classList;
    if (b) {
      classList?.replace("item--collapsed", "item--expanded");
    } else {
      classList?.replace("item--expanded", "item--collapsed");
    }
  }
}

function toggleExpand(host: AccordionItem) {
  return (e: MouseEvent) => {
    host.expanded = !host.expanded;
  };
}
