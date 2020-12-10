import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import "./PreviewShoppingCart.scss";

export default function PreviewShoppingCart() {
  const { addItem, cartItems, itemCount } = useContext(CartContext);
  const [lastItem] = cartItems.slice(-1);
  const [isDisabled, setIsDisabled] = useState(true);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      // If is not the first render (didMount = "false"), turn didMount to "false"
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

  // Pb si il n'y a pas d'article dans le panier ? Faire une ternaire ?

  return (
    <div className={`previewShoppingCart ${isDisabled ? "disabled" : null}`}>
      <div className="previewShoppingCart_lastItem">
        <img
          className="previewShoppingCart_lastItem_illustration"
          src={`${process.env.PUBLIC_URL}/assets/${
            "img-1.jpg" || lastItem.image
          }`}
          alt="Illustration du manteau"
        />

        <div className="previewShoppingCart_lastItem_informations">
          <div className="previewShoppingCart_lastItem_informations_top">
            <h2 className="previewShoppingCart_lastItem_informations_top_title">
              {lastItem.title || "undefined"}
            </h2>
            <h4 className="previewShoppingCart_lastItem_informations_top_color">
              {lastItem.color || "null"}
            </h4>
          </div>
          <div className="previewShoppingCart_lastItem_informations_bottom">
            <h4 className="previewShoppingCart_lastItem_informations_bottom_size">
              {lastItem.size || "null"}
            </h4>
            <h3 className="previewShoppingCart_lastItem_informations_bottom_price">
              {lastItem.quantity || "00"} x {lastItem.price || "00"}.00€
            </h3>
          </div>
        </div>
      </div>
      <div className="previewShoppingCart_otherItemsCount">
        <h3>{itemCount - lastItem.quantity || "0"} articles en plus</h3>
      </div>

      <Link to="/cart">
        <div className="previewShoppingCart_button">Voir le panier</div>
      </Link>
    </div>
  );
}
