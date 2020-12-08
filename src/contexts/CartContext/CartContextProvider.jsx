import React, { useReducer } from "react";
import PropTypes from "prop-types";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

// export const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalItems: 0,
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const removeItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
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
