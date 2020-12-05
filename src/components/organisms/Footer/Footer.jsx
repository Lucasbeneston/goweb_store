import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      Made with <FontAwesomeIcon icon={faHeart} /> by Goweb - Make sure that
      won't buy anything from here, it's just fake !
    </footer>
  );
}
