import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import ShoppingCartItem from "../../organisms/ShoppingCartItem/ShoppingCartItem";
import ShoppingCartTotal from "../../organisms/ShoppingCartTotal/ShoppingCartTotal";

import "./ShoppingCart.scss";

export default function ShoppingCart() {
  const { cartItems, itemTotalValue, itemCount } = useContext(CartContext);

  return (
    <div className="shoppingCart">
      <h1 className="shoppingCart_title">Panier</h1>
      {cartItems.map((item) => (
        <ShoppingCartItem
          item={item}
          itemImage={item.image}
          itemTitle={item.title}
          itemColor={item.color}
          itemReference={item.reference}
          itemQuantity={item.quantity}
          itemSize={item.size}
          itemPrice={item.price}
        />
      ))}

      <ShoppingCartTotal
        itemTotalValue={itemTotalValue}
        itemCount={itemCount}
      />

      <button className="shoppingCart_buttonNext" type="button">
        Continuer
      </button>
    </div>
  );
}
