import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalContext, GlobalProvider } from "./GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <GlobalContext.Consumer>{(context) => <App />}</GlobalContext.Consumer>
  </GlobalProvider>
);
