import { state } from "./state";
import { initRouter } from "./router";

import "./components/buttons";
import "./components/text";
import "./components/star";
import "./components/countdown";
//hands
import "./../src/components/hands";
import "./../src/components/hands/user-hands";
import "./../src/components/hands/computer-hands";

(function () {
    state.init();
    const rootEl = document.querySelector(".container");
    initRouter(rootEl);
  })();