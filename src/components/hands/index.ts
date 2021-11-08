const piedraImg = require("url:../../../src/assets/piedra2.png");
const papelImg = require("url:../../../src/assets/papel2.png");
const tijeraImg = require("url:../../../src/assets/tijera2.png");

export class Hands extends HTMLElement {
  shadow: ShadowRoot;
  type: string;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.type = this.getAttribute("type");
  }
  connectedCallback() {
    this.render();
  }

  render() {
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
    <img class="piedra" src=${piedraImg}>
    <img class="papel" src=${papelImg}>
    <img class="tijera" src=${tijeraImg}>
    `;

    const style = document.createElement("style");
    style.innerHTML = `
    .container {
      display: flex;
      justify-content: space-around;
      min-width: 250px;
      height: auto;
      align-items: flex-end;
      overflow: hidden;
    }
    .tijera, .piedra, .papel {
      height: 150px;
      color: rgb(248, 208, 156);
    }
    @media(min-width: 769px){
      .tijera, .piedra, .papel {
        height: 200px;
      }
    }
    `;

    this.shadow.appendChild(style);
    this.shadow.appendChild(div);
  }
}
customElements.define("my-hands", Hands);