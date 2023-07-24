import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, BrowserRouter } from "react-router-dom";

//import { Provider } from 'react-redux';
//import { Store } from './Redux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
