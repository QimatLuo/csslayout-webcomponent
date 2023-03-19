import "./style.css";
import TEMPLATE from "./template.html?raw";
import { register } from "./WebComponent/util";
import { WebComponent as Accordion } from "./WebComponent/accordion";

Promise.all(
  Array.of(
    "./WebComponent/accordion",
    "./WebComponent/accordion-item",
    "./WebComponent/spinner",
    "./components/form-login"
  ).map((x) => import(x).then(register("my")))
).then(() => {
  const app = document.querySelector<HTMLDivElement>("#app");
  app!.innerHTML = TEMPLATE;

  const accordion = app?.querySelector<Accordion>("my-accordion");
  accordion!.step = 1;

  const formLogin = app?.querySelector<Accordion>("my-form-login");
  formLogin?.addEventListener("login", () => {
    accordion!.step = 2;
  });
});
