const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      localStorage.setItem("cart", JSON.stringify(action.item));
      return {
        ...state,
        cartItems: [...state.cartItems],
        totalItems: state.cartItems.length,
      };

    case "REMOVE_ITEM":
      localStorage.removeItem("cart", JSON.stringify(action.item));
      return {
        ...state,
        cartItems: [...state.cartItems],
        totalItems: state.cartItems.length,
      };

    case "CLEAR_CART":
      localStorage.clear();
      return {
        cartItems: [],
        totalItems: 0,
      };

    default:
      return state;
  }
};

module.exports = reducer;
