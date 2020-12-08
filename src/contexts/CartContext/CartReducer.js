const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  const itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return {
    itemCount,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        // !state.cartItems.find((item) => item.id === action.item.id) &&
        !state.cartItems.find((item) => item.size === action.item.size) ||
        !state.cartItems.find((item) => item.color === action.item.color)
      ) {
        state.cartItems.push({
          ...action.item,
          quantity: action.item.quantity,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // case "REMOVE_ITEM":
    //   localStorage.removeItem("cart", JSON.stringify(action.item));
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems],
    //     totalItems: state.cartItems.length,
    //   };

    // case "CLEAR_CART":
    //   localStorage.clear();
    //   return {
    //     cartItems: [],
    //     totalItems: 0,
    //   };

    default:
      return state;
  }
};
