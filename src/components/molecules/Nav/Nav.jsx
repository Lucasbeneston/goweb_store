import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
// import LogoGoweb from "../../atoms/SVG/LogoGoweb";

import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav" role="navigation">
      <div className="nav_left">
        <button className="nav_left_button" type="button">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Goweb.</h1>
        {/* <div className="nav_logo"><LogoGoweb /></div> */}
      </div>

      <div className="nav_right">
        <button className="nav_right_button" type="button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="nav_right_button" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <button className="nav_right_button" type="button">
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </nav>
  );
}
