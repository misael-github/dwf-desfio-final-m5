import { state } from "../../state";


export function initPageResults(params) {
  const currentState = state.getState();

  function results() {
    if (currentState.currentGame.myPlay != "") {
      const myPlay = currentState.currentGame.myPlay;
      const computerPlay = currentState.currentGame.computerPlay;
      return state.whoWins(myPlay, computerPlay);
    } else {
      return "Empate";
    }
  }

  const result: string = results();

  const scoreUser: Number = currentState.history.user;
  const scoreComputer: Number = currentState.history.computer;

  const div = document.createElement("div");

  div.className = `results ${result}`;
  div.innerHTML = `
    <my-stars tag="${result}" class="star"></my-stars>
    <div class="score">
      <my-text tag="h3" class="score-title">Score</my-text>
      <div class="score-contain">
        <my-text tag="h4">Vos: ${scoreUser}</my-text>
        <my-text tag="h4">Máquina: ${scoreComputer}</my-text>
      </div>
    </div>
    <my-button class="return">Volver a Jugar</my-button>
  `;

  const button = div.querySelector(".return");

  button.addEventListener("click", () => {
    state.setMove("");
    params.goTo("/instructions");
  });

  return div;
}