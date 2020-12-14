import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faCaretDown,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import "./NavDesktop.scss";

export default function NavDesktop({ itemCount }) {
  return (
    <>
      <div className="navDesktop">
        <div className="navDesktop_top">
          <HashLink to="/#" aria-label="Aller à la page d'accueil">
            <div className="navDesktop_top_logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logoSVGgoweb.png`}
                alt="Logo de l'agence Goweb"
              />
            </div>
          </HashLink>
          <HashLink
            to="/panier#"
            className="navDesktop_top_cartButton"
            type="button"
            aria-label="Aller sur la page panier"
          >
            Panier
            <span className="navDesktop_top_cartButton_cartCount">
              ({itemCount})
            </span>
          </HashLink>
        </div>
        <div className="navDesktop_bottom">
          <div className="navDesktop_bottom_menu">
            <HashLink to="/#" aria-label="Aller à la page d'accueil">
              Home
            </HashLink>
            <HashLink to="/homme#" aria-label="Aller dans la section Homme">
              Homme <FontAwesomeIcon icon={faCaretDown} />
            </HashLink>
            <HashLink to="/femme#" aria-label="Aller dans la section Femme">
              Femme <FontAwesomeIcon icon={faCaretDown} />
            </HashLink>
            <HashLink to="/maison#" aria-label="Aller dans la section Maison">
              Maison
            </HashLink>
            <HashLink to="/jardin#" aria-label="Aller dans la section Jardon">
              Jardin
            </HashLink>
            <HashLink to="/blog#" aria-label="Aller dans la section Blog">
              Blog
            </HashLink>
          </div>
          <div className="navDesktop_bottom_likeSearch">
            <HashLink
              to="/favoris#"
              className="navDesktop_bottom_likeSearch_button"
              type="button"
              aria-label="Aller aux favoris"
            >
              <FontAwesomeIcon icon={faHeart} />
            </HashLink>
            <div className="navDesktop_bottom_likeSearch_line" />
            <button
              className="navDesktop_bottom_likeSearch_button"
              type="button"
              aria-label="Rechercher des articles"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

NavDesktop.propTypes = {
  itemCount: PropTypes.number.isRequired,
};
