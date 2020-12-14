import React from "react";
import PropTypes from "prop-types";

import "./ItemMore.scss";

export default function ItemMore({
  itemPriceHT,
  itemPriceTTC,
  itemImage,
  itemTitle,
}) {
  return (
    <div className="itemMore">
      <div className="itemMore_price">
        <h5 className="itemMore_price_HT">{itemPriceHT} € HT</h5>
        <h6 className="itemMore_price_TTC">{itemPriceTTC} € TTC</h6>
      </div>
      <div className="itemMore_top">
        <img
          className="itemMore_top_image"
          src={`${process.env.PUBLIC_URL}/assets/${itemImage}`}
          alt={`Illustration du produit : ${itemTitle}`}
        />
        <h4 className="itemMore_top_title">{itemTitle}</h4>
      </div>
      <button
        className="itemMore_addButton"
        type="button"
        aria-label="Ajouter au panier"
      >
        Ajouter au panier
      </button>
    </div>
  );
}

ItemMore.propTypes = {
  itemPriceHT: PropTypes.number.isRequired,
  itemPriceTTC: PropTypes.number.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
};
