import React, { useContext, useState, useEffect } from "react";
import HeaderContext from "../../../contexts/HeaderContext/HeaderContext";
import Banner from "../../molecules/Banner/Banner";
import Nav from "../../molecules/Nav/Nav";
import PreviewShoppingCart from "../PreviewShoppingCart/PreviewShoppingCart";

import "./Header.scss";

export default function Header() {
  // Recover and storage the header context
  const context = useContext(HeaderContext);
  const { headerHeight, setHeaderHeight } = context;

  // If the window width is less than 769px, the device "is a mobile"
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  // Change the value of "isMobile" to "true" when the window width is less than 769px
  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

  // Call the updateMedia function when the user resize the screen / change the device
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // Change the body padding top when "headerHeight" context change and the value of state "isMobile"
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.paddingTop = `${headerHeight}px`;
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
