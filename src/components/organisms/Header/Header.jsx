import React, { useContext, useEffect } from "react";
import HeaderContext from "../../../contexts/HeaderContext";
import Banner from "../../molecules/Banner/Banner";
import Nav from "../../molecules/Nav/Nav";

import "./Header.scss";

export default function Header() {
  const context = useContext(HeaderContext);
  const { headerHeight, setHeaderHeight } = context;

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.marginTop = `${headerHeight}px`;
    setHeaderHeight(document.querySelector(".header").offsetHeight);
  }, [headerHeight]);

  return (
    <header className="header">
      <Banner />
      <Nav />
    </header>
  );
}
