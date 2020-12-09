import React from "react";
import PropTypes from "prop-types";

import "./ShoppingCartTotal.scss";

export default function ShoppingCartTotal({ itemTotalValue, itemCount }) {
  return (
    <div className="shoppingCartTotal">
      <div className="shoppingCartTotal_articles">
        <h2>{itemCount} articles</h2>
        <h2>{itemTotalValue}.00€</h2>
      </div>
      <div className="shoppingCartTotal_delivery">
        <h2>Frais de livraison</h2>
        <h2>0.00€</h2>
      </div>
      <div className="shoppingCartTotal_toPay">
        <h2>Total</h2>
        <h2>{itemTotalValue}.00€</h2>
      </div>
    </div>
  );
}

ShoppingCartTotal.propTypes = {
  itemTotalValue: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};
