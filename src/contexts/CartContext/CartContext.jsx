import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { CartReducer, sumItems } from "./CartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", item });
  };

  const contextValues = {
    addItem,
    removeItem,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
