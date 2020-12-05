import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner" role="banner">
      <a href="https://www.goweb.fr/" className="banner_message">
        Découvrez le nouveau site internet de Goweb ! Entrez dans la famille !
      </a>
      <button className="banner_close" type="button">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}
