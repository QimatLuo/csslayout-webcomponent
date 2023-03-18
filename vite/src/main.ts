import "./style.css";
import TEMPLATE from "./template.html?raw";
import { register } from "./WebComponent/util";

Promise.all(
  Array.of(
    "./WebComponent/accordion",
    "./WebComponent/accordion-item",
  ).map((x) => import(x).then(register("my")))
).then(() => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = TEMPLATE;
});

