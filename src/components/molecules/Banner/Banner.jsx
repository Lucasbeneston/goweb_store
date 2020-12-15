import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import HeaderContext from "../../../contexts/HeaderContext/HeaderContext";

import "./Banner.scss";

export default function Banner() {
  // Recover and storage the header context setter in "setHeaderHeight"
  const context = useContext(HeaderContext);
  const { setHeaderHeight } = context;

  // Return "true" or "false" if the key "banner" is in sessionStorage or not
  const [bannerInSessionStorage, setBannerInSessionStorage] = useState(
    sessionStorage.getItem("banner")
  );

  // Add "banner : true" in the sessionStorage when the user click and change the state of "bannerInSessionStorage"
  const addToSessionStorage = () => {
    sessionStorage.setItem("banner", true);
    setBannerInSessionStorage(true);
  };

  // Change the value of "HeaderHeight" when the "addToSessionStorage" change
  useEffect(() => {
    setHeaderHeight(document.querySelector(".header").offsetHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToSessionStorage]);

  return (
    <div
      className={`banner ${bannerInSessionStorage ? "hidden" : null}`}
      role="banner"
    >
      <a
        className="banner_message"
        href="https://www.goweb.fr/"
        onClick={addToSessionStorage}
        hrefLang="fr"
      >
        Découvrez le nouveau site internet de Goweb ! Entrez dans la famille !
      </a>
      <button
        className="banner_close"
        type="button"
        aria-label="Fermer la bannier"
        onClick={addToSessionStorage}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}
