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
    path: /\/piedra-papel-o-tijera/,
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
  } else {
    handleRoute(location.pathname);
  }

  if (location.host.includes("github.io")) {
    goTo("/piedra-papel-o-tijera");
  } 
 
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}