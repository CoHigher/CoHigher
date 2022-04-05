import ReactDOM from "react-dom";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
