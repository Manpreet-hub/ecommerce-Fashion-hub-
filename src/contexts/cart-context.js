import { createContext, useContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart-reducer";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
