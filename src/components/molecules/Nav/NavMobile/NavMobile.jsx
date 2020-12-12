import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <div className="navMobile_logo">
            <img
              src={`${process.env.PUBLIC_URL}/assets/logoSVGgoweb.png`}
              alt="Illustration du manteau"
            />
          </div>
        </Link>
      </div>

      <div className="navMobile_right">
        <Link to="/favoris" className="navMobile_right_button" type="button">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <button className="navMobile_right_button" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <Link to="/cart" className="navMobile_right_button" type="button">
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="navMobile_right_button_cartCount">{itemCount}</span>
        </Link>
      </div>

      <div className={`navMobile_menu ${isOpen ? "open" : null}`}>
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
    </>
  );
}

NavMobile.propTypes = {
  itemCount: PropTypes.number.isRequired,
};
