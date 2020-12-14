import React from "react";
import { HashLink } from "react-router-hash-link";

import "./NoMatch.scss";

export default function NoMatch() {
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
