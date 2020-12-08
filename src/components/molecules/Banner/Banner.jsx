import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import HeaderContext from "../../../contexts/HeaderContext/HeaderContext";

import "./Banner.scss";

export default function Banner() {
  const context = useContext(HeaderContext);
  const { setHeaderHeight } = context;

  const [bannerInLocalStorage, setBannerInLocalStorage] = useState(
    sessionStorage.getItem("banner")
  );

  const addToLocalStorage = () => {
    sessionStorage.setItem("banner", true);
    setBannerInLocalStorage(true);
  };

  useEffect(() => {
    setHeaderHeight(document.querySelector(".header").offsetHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToLocalStorage]);

  return (
    <div
      className={`banner ${bannerInLocalStorage ? "hidden" : null}`}
      role="banner"
    >
      <a
        className="banner_message"
        href="https://www.goweb.fr/"
        onClick={addToLocalStorage}
        hrefLang="fr"
      >
        Découvrez le nouveau site internet de Goweb ! Entrez dans la famille !
      </a>
      <button
        className="banner_close"
        type="button"
        onClick={addToLocalStorage}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}
