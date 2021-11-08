import { initPageWelcome } from "./pages/welcome";
import { initPageInstructions } from "./pages/instructions";
import { initPagePlay } from "./pages/play";
import { initPageResults } from "./pages/results";

const routes = [
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/dwf-m5-desafio-final/,
    component: initPageWelcome,
  },
  {
    path: /\/instructions/,
    component: initPageInstructions,
  },
  {
    path: /\/play/,
    component: initPagePlay,
  },
  {
    path: /\/results/,
    component: initPageResults,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else if(location.host.includes("github.io")){
   goTo("/desafio-m5")
  }
  
  else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}