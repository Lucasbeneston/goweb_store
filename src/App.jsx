import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderContextProvider from "./contexts/HeaderContextProvider";
import CartContextProvider from "./contexts/CartContext/CartContextProvider";

import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <Router>
      <HeaderContextProvider>
        <CartContextProvider>
          <Header />
          <Routes />
          <Footer />
        </CartContextProvider>
      </HeaderContextProvider>
    </Router>
  );
}

export default App;
