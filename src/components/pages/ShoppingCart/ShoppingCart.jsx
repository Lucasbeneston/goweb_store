import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";

import "./ShoppingCart.scss";

export default function ShoppingCart() {
  const { cartItems, itemTotalValue, itemCount } = useContext(CartContext);

  return (
    <div className="shoppingCart">
      <h1 className="shoppingCart_title">Panier</h1>
      {cartItems.map((item) => (
        <div className="shoppingCart_item">
          <img
            className="shoppingCart_item_illustration"
            src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
            alt="Illustration du manteau"
          />
          <div className="shoppingCart_item_informations">
            <div className="shoppingCart_item_informations_top">
              <h2 className="shoppingCart_item_informations_top_title">
                {item.title}
              </h2>
              <h4 className="shoppingCart_item_informations_top_colorRef">
                {item.color} <span>- Réf. {item.reference}</span>
              </h4>
              <h4>Quantité : {item.quantity}</h4>
            </div>

            <div className="shoppingCart_item_informations_bottom">
              <h4 className="shoppingCart_item_informations_bottom_size">
                {item.size}
              </h4>
              <h3 className="shoppingCart_item_informations_bottom_price">
                {item.price}.00€
              </h3>
            </div>
          </div>
        </div>
      ))}
      <div className="shoppingCart_total">
        <div className="shoppingCart_total_articles">
          <h2>{itemCount} articles</h2>
          <h2>{itemTotalValue}.00€</h2>
        </div>
        <div className="shoppingCart_total_delivery">
          <h2>Frais de livraison</h2>
          <h2>0.00€</h2>
        </div>
        <div className="shoppingCart_total_toPay">
          <h2>Total</h2>
          <h2>{itemTotalValue}.00€</h2>
        </div>
      </div>

      <button className="shoppingCart_buttonNext" type="button">
        Continuer
      </button>
    </div>
  );
}
