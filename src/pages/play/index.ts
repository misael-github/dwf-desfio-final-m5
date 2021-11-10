export function initPagePlay(params) {
  const div = document.createElement("div");

  div.className = "play";
  div.innerHTML = `
  <div class="play__computer">
    <computer-hands class="computer-choices"></computer-hands>
  </div>
  <my-countdown></my-countdown>
  <div class="play__hands">
    <user-hands></user-hands>
  </div>
  `;

  const style = document.createElement("style");
  style.innerHTML = `
    .computer-choices {
      display: none;
    }
  `;

  setInterval(() => {
    style.innerHTML = `
    .computer-choices {
      display: "initial";
    }
  `;
  }, 4000);

  
  setTimeout(() => {
    params.goTo("/results");
  }, 6000);
  
  div.appendChild(style);
  return div;
}