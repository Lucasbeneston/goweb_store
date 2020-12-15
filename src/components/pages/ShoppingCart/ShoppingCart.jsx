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
