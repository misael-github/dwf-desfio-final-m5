import { state } from "../../../state";

const piedraImg = require("url:../../../../src/assets/piedra2.png");
const papelImg = require("url:../../../../src/assets/papel2.png");
const tijeraImg = require("url:../../../../src/assets/tijera2.png");


export class ComputerHands extends HTMLElement {
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
    const container = document.createElement("div");
    container.className = "container";

    const computerChoice = Math.floor(Math.random() * (4 - 1) + 1);

    if (computerChoice == 1) {
      container.innerHTML = `
      <img class="piedra" src=${piedraImg}>
      `;
      state.setComputerMove("piedra");
    } else if (computerChoice == 2) {
      container.innerHTML = `
      <img class="papel" src=${papelImg}>
      `;
      state.setComputerMove("papel");
    } else if (computerChoice == 3) {
      container.innerHTML = `
      <img class="tijera" src=${tijeraImg}>
      `;
      state.setComputerMove("tijera");
    }

    const style = document.createElement("style");
    style.innerHTML = `
      .piedra, .papel, .tijera {
        transform:rotate(180deg);
        height: 300px;
      }
      @media(min-width: 1200px){
        .piedra, .papel, .tijera {
          height: 400px;
        }
      }
    `;

    this.shadow.appendChild(style);
    this.shadow.appendChild(container);
  }
}
customElements.define("computer-hands", ComputerHands);