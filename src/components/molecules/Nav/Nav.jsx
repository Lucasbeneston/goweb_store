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
        <h1 className="nav_left_logo">Goweb.</h1>
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
        <Link
          to="/"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Home
        </Link>
        <Link
          to="/homme"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Homme <FontAwesomeIcon icon={faCaretDown} />
        </Link>
        <Link
          to="/femme"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Femme <FontAwesomeIcon icon={faCaretDown} />
        </Link>
        <Link
          to="/maison"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Maison
        </Link>
        <Link
          to="/jardin"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Jardin
        </Link>
        <Link
          to="/blog"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
