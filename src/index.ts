import { state } from "./state";
import { initRouter } from "./router";

import "./components/buttons";
import "./components/text";
import "./components/star";
import "./components/countdown";

import "./components/hands";
import "./components/hands/user-hands";
import "./components/hands/computer-hands";

(function () {
    state.init();
    const rootEl = document.querySelector(".container");
    initRouter(rootEl);
  })();