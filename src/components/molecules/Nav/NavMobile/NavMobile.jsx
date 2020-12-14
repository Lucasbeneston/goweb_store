import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHeart,
  faSearch,
  faShoppingBag,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import "./NavMobile.scss";

export default function NavMobile({ itemCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const clickOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navMobile_left">
        <button
          className="navMobile_left_button"
          type="button"
          onClick={clickOpenClose}
        >
          <div className="navMobile_left_button_burger">
            {!isOpen ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </div>
        </button>
        <HashLink to="/#">
          <div className="navMobile_logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logoSVGgoweb.png`}
              alt="Logo de l'agence Goweb"
            />
          </div>
        </HashLink>
      </div>

      <div className="navMobile_right">
        <HashLink
          to="/favoris#"
          className="navMobile_right_button"
          type="button"
        >
          <FontAwesomeIcon icon={faHeart} />
        </HashLink>
        <button className="navMobile_right_button" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <HashLink
          to="/panier#"
          className="navMobile_right_button"
          type="button"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="navMobile_right_button_cartCount">{itemCount}</span>
        </HashLink>
      </div>

      <div className={`navMobile_menu ${isOpen ? "open" : null}`}>
        <HashLink to="/#" onClick={clickOpenClose}>
          Home
        </HashLink>
        <HashLink to="/homme#" onClick={clickOpenClose}>
          Homme <FontAwesomeIcon icon={faCaretDown} />
        </HashLink>
        <HashLink to="/femme#" onClick={clickOpenClose}>
          Femme <FontAwesomeIcon icon={faCaretDown} />
        </HashLink>
        <HashLink to="/maison#" onClick={clickOpenClose}>
          Maison
        </HashLink>
        <HashLink to="/jardin#" onClick={clickOpenClose}>
          Jardin
        </HashLink>
        <HashLink to="/blog#" onClick={clickOpenClose}>
          Blog
        </HashLink>
      </div>
    </>
  );
}

NavMobile.propTypes = {
  itemCount: PropTypes.number.isRequired,
};
