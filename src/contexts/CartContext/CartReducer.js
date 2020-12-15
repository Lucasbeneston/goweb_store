// Add cartItems value in the array of the key "cart". If cartItems is not > 0 the value is an empty array
const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

// Create and export the sumItems constant
export const sumItems = (cartItems) => {
  // Uptade the constante "Storage" with the value of "cartItems"
  Storage(cartItems);

  // Reduces the value of all item quantity and stock in "itemCount"
  const itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // Reduces the value of all item price price and stock in "itemTotalValue"
  const itemTotalValue = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  return {
    itemCount,
    itemTotalValue,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Check if the size AND color of the new action item is already exist in the localStorage (cartItems array)
      if (
        !state.cartItems.find(
          (item) =>
            item.size === action.item.size && item.color === action.item.color
        )
      ) {
        // If is not,  push the new item in the localStorage (cartItems array)
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

    case "REMOVE_ITEM":
      // Add all the elements in "cartItems" without the current item, finding by his id
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.item.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.item.id),
        ],
      };

    // // Clear the cart in the localStorage
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
