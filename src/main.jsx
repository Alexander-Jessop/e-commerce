import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { FBProvider } from "./firebase/FBProvider.jsx";
import { FBAuthProvider } from "./firebase/FBAuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FBProvider>
      <FBAuthProvider>
        <QueryClientProvider client={new QueryClient()}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </FBAuthProvider>
    </FBProvider>
  </React.StrictMode>
);
