import React from "react";
import PropTypes from "prop-types";
import "./ShoppingCartItem.scss";

export default function ShoppingCartItem({
  itemImage,
  itemTitle,
  itemColor,
  itemReference,
  itemQuantity,
  itemSize,
  itemPrice,
}) {
  return (
    <div className="shoppingCartItem">
      <img
        className="shoppingCartItem_illustration"
        src={`${process.env.PUBLIC_URL}/assets/${itemImage}`}
        alt="Illustration du manteau"
      />
      <div className="shoppingCartItem_informations">
        <div className="shoppingCartItem_informations_top">
          <h2 className="shoppingCartItem_informations_top_title">
            {itemTitle}
          </h2>
          <h4 className="shoppingCartItem_informations_top_colorRef">
            {itemColor} <span>- Réf. {itemReference}</span>
          </h4>
          <h4>Quantité : {itemQuantity}</h4>
        </div>

        <div className="shoppingCartItem_informations_bottom">
          <h4 className="shoppingCart_item_informations_bottom_size">
            {itemSize}
          </h4>
          <h3 className="shoppingCartItem_informations_bottom_price">
            {itemPrice}.00€
          </h3>
        </div>
      </div>
    </div>
  );
}

ShoppingCartItem.propTypes = {
  itemImage: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemColor: PropTypes.string.isRequired,
  itemReference: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemSize: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
};
