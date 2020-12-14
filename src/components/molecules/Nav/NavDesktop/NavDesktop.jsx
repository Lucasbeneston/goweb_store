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
          <HashLink to="/#">
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
          >
            Panier
            <span className="navDesktop_top_cartButton_cartCount">
              ({itemCount})
            </span>
          </HashLink>
        </div>
        <div className="navDesktop_bottom">
          <div className="navDesktop_bottom_menu">
            <HashLink to="/#">Home</HashLink>
            <HashLink to="/homme#">
              Homme <FontAwesomeIcon icon={faCaretDown} />
            </HashLink>
            <HashLink to="/femme#">
              Femme <FontAwesomeIcon icon={faCaretDown} />
            </HashLink>
            <HashLink to="/maison#">Maison</HashLink>
            <HashLink to="/jardin#">Jardin</HashLink>
            <HashLink to="/blog#">Blog</HashLink>
          </div>
          <div className="navDesktop_bottom_likeSearch">
            <HashLink
              to="/favoris#"
              className="navDesktop_bottom_likeSearch_button"
              type="button"
            >
              <FontAwesomeIcon icon={faHeart} />
            </HashLink>
            <div className="navDesktop_bottom_likeSearch_line" />
            <button
              className="navDesktop_bottom_likeSearch_button"
              type="button"
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
