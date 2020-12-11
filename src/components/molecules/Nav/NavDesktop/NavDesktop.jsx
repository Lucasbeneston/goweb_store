import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <div className="navDesktop_top_logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logoSVGgoweb.png`}
                alt="Illustration du manteau"
              />
            </div>
          </Link>
          <Link to="/cart" className="navDesktop_top_cartButton" type="button">
            Panier
            <span className="navDesktop_top_cartButton_cartCount">
              ({itemCount})
            </span>
          </Link>
        </div>
        <div className="navDesktop_bottom">
          <div className="navDesktop_bottom_menu">
            <Link to="/">Home</Link>
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
          <div className="navDesktop_bottom_likeSearch">
            <Link
              to="/favoris"
              className="navDesktop_bottom_likeSearch_button"
              type="button"
            >
              <FontAwesomeIcon icon={faHeart} />
            </Link>
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
  itemCount: PropTypes.string.isRequired,
};
