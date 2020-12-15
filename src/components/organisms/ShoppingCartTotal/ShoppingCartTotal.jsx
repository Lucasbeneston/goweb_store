import React from "react";
import PropTypes from "prop-types";

import "./ShoppingCartTotal.scss";

export default function ShoppingCartTotal({ itemTotalValue, itemCount }) {
  return (
    <div className="shoppingCartTotal">
      <h1 className="shoppingCartTotal_title">Panier</h1>
      <div className="shoppingCartTotal_container">
        <div className="shoppingCartTotal_container_articles">
          <h2>{itemCount} articles</h2>
          <h2>{itemTotalValue}.00€</h2>
        </div>
        <div className="shoppingCartTotal_container_delivery">
          <h2>Frais de livraison</h2>
          <h2>0.00€</h2>
        </div>
        <div className="shoppingCartTotal_container_toPay">
          <h2>Total</h2>
          <h2>{itemTotalValue}.00€</h2>
        </div>
      </div>
      <button className="shoppingCartTotal_container_buttonNext" type="button">
        Continuer
      </button>
    </div>
  );
}

ShoppingCartTotal.propTypes = {
  itemTotalValue: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};
