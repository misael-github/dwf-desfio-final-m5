export function initPageInstructions(params) {
    const div = document.createElement("div");
  
    div.className = "instructions";
    div.innerHTML = `
    <div class="instructions__text">
      <my-text tag="p">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
    </div> 
    <my-button class="instructions__btn">¡Jugar!</my-button>
   
    <div class="instructions__hands">
      <my-hands ></my-hands>
    </div>
    `;
  
    const button = div.querySelector(".instructions__btn");
    button.addEventListener("click", () => {
      params.goTo("/play");
    });
  
    return div;
  }