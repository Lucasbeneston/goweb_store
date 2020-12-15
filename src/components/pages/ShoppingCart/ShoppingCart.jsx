import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import HeaderContext from "../../../contexts/HeaderContext/HeaderContext";
import ShoppingCartItem from "../../organisms/ShoppingCartItem/ShoppingCartItem";
import ShoppingCartTotal from "../../organisms/ShoppingCartTotal/ShoppingCartTotal";

import "./ShoppingCart.scss";

export default function ShoppingCart() {
  // Recover and storage the header context value in "headerHeight"
  const context = useContext(HeaderContext);
  const { headerHeight } = context;

  // Change the shoppingCart minimum height when "headerHeight" context change
  useEffect(() => {
    const shoppingCart = document.querySelector(".shoppingCart");
    shoppingCart.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  }, [headerHeight]);

  // Recovery and storage the cart context values in different constants
  const { cartItems, itemTotalValue, itemCount } = useContext(CartContext);

  return (
    <div className="shoppingCart">
      <h1 className="shoppingCart_title">Panier</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p className="shoppingCart_emptyCart">Votre panier est vide.</p>
      ) : (
        <div className="shoppingCart_details">
          <div className="shoppingCart_details_items">
            {cartItems.map((item) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
                itemImage={item.color.image}
                itemTitle={item.title}
                itemColor={item.color.name}
                itemReference={item.reference}
                itemQuantity={item.quantity}
                itemSize={item.size}
                itemPrice={item.price}
              />
            ))}
          </div>

          <ShoppingCartTotal
            itemTotalValue={itemTotalValue}
            itemCount={itemCount}
          />
        </div>
      )}
    </div>
  );
}
