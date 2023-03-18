import "./style.css";
import TEMPLATE from "./template.html?raw";

import { Accordion } from "./WebComponent/accordion";
customElements.define("my-accordion", Accordion);

import { AccordionItem } from "./WebComponent/accordion-item";
customElements.define("my-accordion-item", AccordionItem);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = TEMPLATE;
