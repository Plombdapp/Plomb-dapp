import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import thirdweb, { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
