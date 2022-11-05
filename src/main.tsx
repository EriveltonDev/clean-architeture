import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./presentation/pages/home";
import { globalStyle } from "./presentation/style/global";

globalStyle();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
