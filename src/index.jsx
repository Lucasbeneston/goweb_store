import React from "react";
import ReactDOM from "react-dom";
import HeaderContextProvider from "./contexts/HeaderContext/HeaderContextProvider";
import CartContextProvider from "./contexts/CartContext/CartContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HeaderContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </HeaderContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
