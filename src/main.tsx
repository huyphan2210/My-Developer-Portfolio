import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import StoreProviders from "./store/StoreProviders.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProviders>
      <App />
    </StoreProviders>
  </React.StrictMode>
);
