export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_BRAND": {
      console.log(action.payload);
      const filterByBrand = state.products.filter(
        (product) => product.brand == action.payload
      );
      console.log("filterByBrand", filterByBrand);
      return {
        ...state,
        products: filterByBrand,
      };
    }

    case "FILTER_BY_CATEGORY": {
      const filterByCategory = state.products.filter(
        (product) => product.category == action.payload
      );
      return { ...state, products: filterByCategory };
    }

    case "SORT_BY_PRICE": {
      let sortProductsByPrice;
      if (action.payload == "LowToHigh") {
        sortProductsByPrice = state.products.sort((a, b) => a.price - b.price);
      } else {
        sortProductsByPrice = state.products.sort((a, b) => b.price - a.price);
      }
      console.log("sortProductsByPrice", sortProductsByPrice);
      return { ...state, products: sortProductsByPrice };
    }

    case "FILTER_BY_SEARCH": {
      const searchProducts = state.products.filter((product) => {
        product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          product.brand.toLowerCase().includes(action.payload.toLowerCase());
      });
      return { ...state, products: searchProducts };
    }

    case "CLEAR_FILTERS": {
      return { ...state };
    }

    default:
      return state;
  }
};
