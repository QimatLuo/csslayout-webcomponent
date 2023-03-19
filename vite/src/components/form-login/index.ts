import STYLE from "./style.css?raw";
import TEMPLATE from "./template.html?raw";
import { login } from "../../provider/api";

export const tagName = "form-login";
export class WebComponent extends HTMLElement {
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
      ?.querySelector("form")
      ?.addEventListener("submit", submit(this));
  }
  disconnectedCallback() {
    this.shadowRoot
      ?.querySelector("form")
      ?.removeEventListener("submit", submit(this));
  }
}

function submit(host: WebComponent) {
  return (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const button = form.querySelector("button");
    button!.disabled = true;

    login(data.get("account") as string)(data.get("password") as string)
      .then((detail) => {
        const newEvevt = new CustomEvent("login", {
          bubbles: true,
          composed: true,
          detail,
        });
        host.dispatchEvent(newEvevt);
      })
      .finally(() => {
        button!.disabled = false;
      });
  };
}
