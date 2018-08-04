import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./config/store";

import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
