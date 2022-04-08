import React from "react";
import { useCart, useWishList } from "../../contexts/";

const CartItem = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { wishlistState, wishlistDispatch } = useWishList();

  return (
    <>
      {cart.map((item) => {
        return (
          <div className="horizontal-card  product-card">
            <img
              className="card-img product-img"
              src={item.img}
              alt="product-img"
            />
            <div className="card-body">
              <h4 className="card-title"> {item.title}</h4>
              <p>₹{item.price}</p>
              <div className="quantity">
                <p>
                  <label>Quantity:</label>
                </p>
                <div className="flex-row">
                  <button
                    className="plus-minus"
                    onClick={() =>
                      cartDispatch({ type: "INCREASE_QTY", payload: item._id })
                    }
                  >
                    +
                  </button>
                  <input className="qty-input" type="number" /> {item.qty}
                  <button
                    disabled={item.qty == 1 ? true : false}
                    className="plus-minus"
                    onClick={() =>
                      cartDispatch({ type: "DECREASE_QTY", payload: item._id })
                    }
                  >
                    -
                  </button>
                </div>
              </div>

              <button
                className="btn-default cart-btn"
                onClick={() =>
                  cartDispatch({ type: "REMOVE_FROM_CART", payload: item._id })
                }
              >
                Remove from cart
              </button>
              <button
                className="btn-default btn-dark cart-btn"
                onClick={() => {
                  wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item });
                  cartDispatch({ type: "REMOVE_FROM_CART", payload: item._id });
                }}
              >
                Move to wishlist
              </button>
            </div>{" "}
          </div>
        );
      })}
    </>
  );
};

export { CartItem };
