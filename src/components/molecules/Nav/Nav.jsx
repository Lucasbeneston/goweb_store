import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import NavMobile from "./NavMobile/NavMobile";
import NavDesktop from "./NavDesktop/NavDesktop";

import "./Nav.scss";

export default function Nav() {
  // Recover and storage the number of items in the cart context value in "itemCount"
  const { itemCount } = useContext(CartContext);

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

  return (
    <nav className="nav" role="navigation">
      {isMobile ? (
        <NavMobile itemCount={itemCount} />
      ) : (
        <NavDesktop itemCount={itemCount} />
      )}
    </nav>
  );
}
