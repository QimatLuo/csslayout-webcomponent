import "./style.css";
import TEMPLATE from "./template.html?raw";

import { Accordion } from "./WebComponent/accordion";
customElements.define("my-accordion", Accordion);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = TEMPLATE;
