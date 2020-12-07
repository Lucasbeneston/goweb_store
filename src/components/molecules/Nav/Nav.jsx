import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHeart,
  faSearch,
  faShoppingBag,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
// import LogoGoweb from "../../atoms/SVG/LogoGoweb";

import "./Nav.scss";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="nav" role="navigation">
      <div className="nav_left">
        <button
          className="nav_left_button"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="nav_left_button_burger">
            {!isOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </div>
        </button>
        <h1>Goweb.</h1>
        {/* <div className="nav_logo"><LogoGoweb /></div> */}
      </div>

      <div className="nav_right">
        <Link to="/favoris" className="nav_right_button" type="button">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <button className="nav_right_button" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <Link to="/cart" className="nav_right_button" type="button">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
      </div>
      <div className={`nav_menu ${isOpen ? "open" : null}`}>
        <Link to="/home">Home</Link>
        <Link to="/homme">
          Homme <FontAwesomeIcon icon={faCaretDown} />
        </Link>
        <Link to="/femme">
          Femme <FontAwesomeIcon icon={faCaretDown} />
        </Link>
        <Link to="/maison">Maison</Link>
        <Link to="/jardin">Jardin</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}
