import React, { useEffect } from "react";
import Banner from "../../molecules/Banner/Banner";
import Nav from "../../molecules/Nav/Nav";

import "./Header.scss";

export default function Header() {
  useEffect(() => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const body = document.querySelector("body");
    body.style.marginTop = `${headerHeight}px`;
  }, []);

  return (
    <header className="header">
      <Banner />
      <Nav />
    </header>
  );
}
