import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./reducers";
import { ProductsData } from "../utils/productsData.json";

const Cart = createContext();
export const CartState = () => useContext(Cart);

const Context = ({ children }) => {
  const data = Array.isArray(ProductsData) ? ProductsData : [];

  const [state, dispatch] = useReducer(cartReducer, {
    products: data,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    products: data,
    byBrand: null,
    byCategory: null,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
