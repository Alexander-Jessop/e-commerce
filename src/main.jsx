import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import FBProvider from "./firebase/FBProvider.jsx";
import FBAuthProvider from "./firebase/FBAuthProvider.jsx";
import CartCtxProvider from "./components/context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FBProvider>
      <FBAuthProvider>
        <CartCtxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartCtxProvider>
      </FBAuthProvider>
    </FBProvider>
  </React.StrictMode>
);
