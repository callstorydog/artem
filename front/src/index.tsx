import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "@redux/store";

import { CustomAuthenticator } from "@auth";

import "react-phone-number-input/style.css";
import "./index.css";

ReactDOM.render(
  <CustomAuthenticator>
    <Provider store={store}>
      <App />
    </Provider>
  </CustomAuthenticator>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
