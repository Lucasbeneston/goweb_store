import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import "./PreviewShoppingCart.scss";

export default function PreviewShoppingCart() {
  const { addItem, cartItems, itemCount } = useContext(CartContext);
  const [lastItem] = cartItems.slice(-1);
  const [isDisabled, setIsDisabled] = useState(true);
  const didMount = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // If is not the first render (didMount = "true")
    if (didMount.current) {
      // Turn isDisabled to "false"
      setIsDisabled(false);
      // After 3s, switch isDisabled to "true"
      setTimeout(() => {
        setIsDisabled(true);
      }, 3000);
      // Automaticly turn didMount to "true"
      didMount.current = true;
    } else {
      // If is the first rendrer, turn didMount to "true"
      didMount.current = true;
    }
  }, [addItem]);

  return (
    <div
      className={`previewShoppingCart ${
        isDisabled || location.pathname === "/cart" ? "disabled" : null
      }`}
    >
      {Object.keys(cartItems).length === 0 ? (
        <div className="previewShoppingCart_emptyCart">
          <h2>Le panier est vide</h2>
        </div>
      ) : (
        <>
          <div className="previewShoppingCart_lastItem">
            <img
              className="previewShoppingCart_lastItem_illustration"
              src={`${process.env.PUBLIC_URL}/assets/${lastItem.color.image}`}
              alt="Illustration du manteau"
            />

            <div className="previewShoppingCart_lastItem_informations">
              <div className="previewShoppingCart_lastItem_informations_top">
                <h2 className="previewShoppingCart_lastItem_informations_top_title">
                  {lastItem.title}
                </h2>
                <h4 className="previewShoppingCart_lastItem_informations_top_color">
                  {lastItem.color.name}
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
        </>
      )}
    </div>
  );
}
