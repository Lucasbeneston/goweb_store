import React, { useContext, useState } from "react";
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
import { CartContext } from "../../../contexts/CartContext/CartContext";
// import LogoGoweb from "../../atoms/SVG/LogoGoweb";

import "./Nav.scss";

export default function Nav() {
  const { itemCount } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const clickOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav" role="navigation">
      <div className="nav_left">
        <button
          className="nav_left_button"
          type="button"
          onClick={clickOpenClose}
        >
          <div className="nav_left_button_burger">
            {!isOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </div>
        </button>
        <Link to="/">
          <h1 className="nav_left_logo">Goweb.</h1>{" "}
          {/* <div className="nav_logo"><LogoGoweb /></div> */}
        </Link>
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
          <span className="nav_right_button_cartCount">{itemCount}</span>
        </Link>
      </div>

      <div className={`nav_menu ${isOpen ? "open" : null}`}>
        <Link to="/" onClick={clickOpenClose}>
          Home
        </Link>
        <Link to="/homme" onClick={clickOpenClose}>
          Homme <FontAwesomeIcon icon={faCaretDown} />
        </Link>
        <Link to="/femme" onClick={clickOpenClose}>
          Femme <FontAwesomeIcon icon={faCaretDown} />
        </Link>
        <Link to="/maison" onClick={clickOpenClose}>
          Maison
        </Link>
        <Link to="/jardin" onClick={clickOpenClose}>
          Jardin
        </Link>
        <Link to="/blog" onClick={clickOpenClose}>
          Blog
        </Link>
      </div>
    </nav>
  );
}
