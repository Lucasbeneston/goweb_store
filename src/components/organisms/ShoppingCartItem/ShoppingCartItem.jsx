import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../../contexts/CartContext/CartContext";

import "./ShoppingCartItem.scss";

export default function ShoppingCartItem({
  item,
  itemImage,
  itemTitle,
  itemColor,
  itemReference,
  itemQuantity,
  itemSize,
  itemPrice,
}) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="shoppingCartItem">
      <img
        className="shoppingCartItem_illustration"
        src={`${process.env.PUBLIC_URL}/assets/${itemImage}`}
        alt={`Illustration du produit : ${itemTitle}`}
      />
      <div className="shoppingCartItem_informations">
        <div
          className="shoppingCartItem_informations_removeItem"
          tabIndex={0}
          role="button"
          aria-label={`Supprimer l'article ${itemTitle}`}
          onClick={() => {
            removeItem(item);
          }}
          onKeyDown={() => {
            removeItem(item);
          }}
          type="button"
        >
          &times;
        </div>
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
            {itemQuantity * itemPrice}.00€
          </h3>
        </div>
      </div>
    </div>
  );
}

ShoppingCartItem.defaultProps = {
  item: null,
};

ShoppingCartItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string, PropTypes.number),
  itemImage: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  itemColor: PropTypes.string.isRequired,
  itemReference: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemSize: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
};
