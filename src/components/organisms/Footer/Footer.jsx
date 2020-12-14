import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <h6>
        Made with <FontAwesomeIcon icon={faHeart} /> by Lucas BENESTON for Goweb
        - Make sure that won't buy anything from here, it's just fake !
      </h6>
    </footer>
  );
}
