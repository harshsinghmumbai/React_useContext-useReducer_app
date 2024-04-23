import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import App_Provider from "./Context/App_Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App_Provider>
    <App />
  </App_Provider>
);
