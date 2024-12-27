import React from "react";
import ReactDOM from "react-dom";
import "../src/style/global.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./i18n"; // استيراد i18n.js لتفعيل الترجمة

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
