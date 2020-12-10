import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import "./PreviewShoppingCart.scss";

export default function PreviewShoppingCart() {
  const { cartItems, itemCount } = useContext(CartContext);
  const [lastItem] = cartItems.slice(-1);

  return (
    <div className="previewShoppingCart">
      <div className="previewShoppingCart_lastItem">
        <img
          className="previewShoppingCart_lastItem_illustration"
          src={`${process.env.PUBLIC_URL}/assets/${lastItem.image}`}
          alt="Illustration du manteau"
        />

        <div className="previewShoppingCart_lastItem_informations">
          <div className="previewShoppingCart_lastItem_informations_top">
            <h2 className="previewShoppingCart_lastItem_informations_top_title">
              {lastItem.title}
            </h2>
            <h4 className="previewShoppingCart_lastItem_informations_top_color">
              {lastItem.color}
            </h4>
          </div>
          <div className="previewShoppingCart_lastItem_informations_bottom">
            <h4 className="previewShoppingCart_lastItem_informations_bottom_size">
              {lastItem.size}
            </h4>
            <h3 className="previewShoppingCart_lastItem_informations_bottom_price">
              {lastItem.quantity} x {lastItem.price}.00€
            </h3>
          </div>
        </div>
      </div>
      <div className="previewShoppingCart_otherItemsCount">
        <h3>{itemCount - lastItem.quantity} articles en plus</h3>
      </div>

      <Link to="/cart">
        <div className="previewShoppingCart_button">Voir le panier</div>
      </Link>
    </div>
  );
}
