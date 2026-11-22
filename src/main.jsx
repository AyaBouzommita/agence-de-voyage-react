import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { DestinationsProvider } from "./context/DestinationsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DestinationsProvider>
      <App />
    </DestinationsProvider>
  </React.StrictMode>
);
