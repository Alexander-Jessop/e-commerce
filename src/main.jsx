import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import App from "./App.jsx";
import "./index.css";

import FBProvider from "./firebase/FBProvider.jsx";
import FBAuthProvider from "./firebase/FBAuthProvider.jsx";
import CartCtxProvider from "./components/context/CartContext.jsx";

const stripeKey =
  "pk_test_51NVjYaAmtQhiB2lmTtM25VqREwDZndWzN2BiKNNFZRQkPmCeDrueIeCNwdUdB7dx7fT5CGYBmxbZ2JtfsBUCzmjW007zTg8CDh";

const stripePromise = loadStripe(stripeKey);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FBProvider>
      <FBAuthProvider>
        <CartCtxProvider>
          <BrowserRouter>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </BrowserRouter>
        </CartCtxProvider>
      </FBAuthProvider>
    </FBProvider>
  </React.StrictMode>
);
