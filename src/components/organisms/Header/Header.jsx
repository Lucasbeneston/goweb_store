import React, { useContext, useState, useEffect } from "react";
import HeaderContext from "../../../contexts/HeaderContext/HeaderContext";
import Banner from "../../molecules/Banner/Banner";
import Nav from "../../molecules/Nav/Nav";
import PreviewShoppingCart from "../PreviewShoppingCart/PreviewShoppingCart";

import "./Header.scss";

export default function Header() {
  const context = useContext(HeaderContext);
  const { headerHeight, setHeaderHeight } = context;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.marginTop = `${headerHeight}px`;
    setHeaderHeight(document.querySelector(".header").offsetHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerHeight, isMobile]);

  return (
    <header className="header">
      <Banner />
      <Nav />
      <PreviewShoppingCart />
    </header>
  );
}
