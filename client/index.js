import ReactDOM from "react-dom";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
