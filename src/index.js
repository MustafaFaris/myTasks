import React from "react";
import ReactDOM from "react-dom";
import ContextProvider from "./context";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  rootElement
);

serviceWorkerRegistration.register();
