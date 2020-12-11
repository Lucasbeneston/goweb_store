import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import NavMobile from "./NavMobile/NavMobile";
import NavDesktop from "./NavDesktop/NavDesktop";

import "./Nav.scss";

export default function Nav() {
  const { itemCount } = useContext(CartContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 769);
  };

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
