import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import axe from "react-axe";
import App from "./App";
import * as serviceWorker from "./registerServiceWorker";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
