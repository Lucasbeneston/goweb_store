import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import HeaderContext from "./contexts/HeaderContext";
import Header from "./components/organisms/Header/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer/Footer";

import "./App.scss";

function App() {
  const [headerHeight, setHeaderHeight] = useState();

  useEffect(() => {
    setHeaderHeight(document.querySelector(".header").offsetHeight);
  }, []);

  const contextHeader = {
    headerHeight,
    setHeaderHeight,
  };
  return (
    <Router>
      <HeaderContext.Provider value={contextHeader}>
        <Header />
        <Routes />
        <Footer />
      </HeaderContext.Provider>
    </Router>
  );
}

export default App;
