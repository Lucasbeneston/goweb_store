import React, { useContext, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import HeaderContext from "../../../contexts/HeaderContext/HeaderContext";

import "./NoMatch.scss";

export default function NoMatch() {
  // Recover and storage the header context value in "headerHeight"
  const context = useContext(HeaderContext);
  const { headerHeight } = context;

  // Change the noMatch minimum height when "headerHeight" context change
  useEffect(() => {
    const shoppingCart = document.querySelector(".noMatch");
    shoppingCart.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  }, [headerHeight]);

  return (
    <div className="noMatch">
      <h2 className="noMatch_oops">Oops...</h2>
      <h3 className="noMatch_informations">
        La page demandée n'est pas disponible actuellement !
      </h3>
      <HashLink to="/#" className="noMatch_button">
        Retour à la page d'accueil
      </HashLink>
    </div>
  );
}
