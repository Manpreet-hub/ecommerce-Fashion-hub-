import { createContext, useReducer, useContext } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const WishlistContext = createContext();
const useWishList = () => useContext(WishlistContext);

const intitialValue = { wishlist: [] };
const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    intitialValue
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishList };
