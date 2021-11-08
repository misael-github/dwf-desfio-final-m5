export function initPageWelcome(params) {
  const div = document.createElement("div");

  div.className = "welcome";
  div.innerHTML = `
  <div class="welcome__title">
    <my-text tag="h1">Piedra Papel ó Tijera</my-text>
  </div> 
  <my-button class="welcome__button">Empezar</my-button>
 
  <div class="welcome__hands">
    <my-hands></my-hands> 
  </div>
  `;

  const button = div.querySelector(".welcome__button");
  button.addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}