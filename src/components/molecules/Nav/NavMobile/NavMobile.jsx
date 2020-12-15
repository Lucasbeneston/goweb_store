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
  // By default the burger menu is close
  const [isOpen, setIsOpen] = useState(false);

  // Change the value of "isOpen" when the user click on the burger menu
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
        <HashLink to="/#" aria-label="Aller à la page d'accueil">
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
          aria-label="Aller aux favoris"
        >
          <FontAwesomeIcon icon={faHeart} />
        </HashLink>
        <button
          className="navMobile_right_button"
          type="button"
          aria-label="Rechercher des articles"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <HashLink
          to="/panier#"
          className="navMobile_right_button"
          type="button"
          aria-label="Aller sur la page panier"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="navMobile_right_button_cartCount">{itemCount}</span>
        </HashLink>
      </div>

      <div className={`navMobile_menu ${isOpen ? "open" : null}`}>
        <HashLink
          to="/#"
          aria-label="Aller à la page d'acceuil"
          onClick={clickOpenClose}
        >
          Home
        </HashLink>
        <HashLink
          to="/homme#"
          aria-label="Aller à la section Homme"
          onClick={clickOpenClose}
        >
          Homme <FontAwesomeIcon icon={faCaretDown} />
        </HashLink>
        <HashLink
          to="/femme#"
          aria-label="Aller à la section Femme"
          onClick={clickOpenClose}
        >
          Femme <FontAwesomeIcon icon={faCaretDown} />
        </HashLink>
        <HashLink
          to="/maison#"
          aria-label="Aller à la section Maison"
          onClick={clickOpenClose}
        >
          Maison
        </HashLink>
        <HashLink
          to="/jardin#"
          aria-label="Aller à la section Jardin"
          onClick={clickOpenClose}
        >
          Jardin
        </HashLink>
        <HashLink
          to="/blog#"
          aria-label="Aller à la section Blog"
          onClick={clickOpenClose}
        >
          Blog
        </HashLink>
      </div>
    </>
  );
}

NavMobile.propTypes = {
  itemCount: PropTypes.number.isRequired,
};
