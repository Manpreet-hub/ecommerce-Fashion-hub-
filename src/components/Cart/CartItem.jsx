import React from "react";
import { useCart, useWishList } from "../../contexts/";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { wishlistState, wishlistDispatch } = useWishList();

  return (
    <>
      {cart.map((item) => {
        return (
          <div className="horizontal-card product-card">
            <img
              className="card-img product-img"
              src={item.img}
              alt="product-img"
            />
            <div className="card-body">
              <h4 className="card-title card-text"> {item.title}</h4>
              <p className="card-text">₹{item.price}</p>
              <div className="quantity card-text">
                <p>
                  <label>Quantity:</label>
                </p>
                <div className="flex-row">
                  <button
                    disabled={item.qty == 1 ? true : false}
                    className="plus-minus"
                    onClick={() => {
                      cartDispatch({
                        type: "DECREASE_QTY",
                        payload: item._id,
                      });
                      toast.error(`Product count decremented`, {
                        position: "top-right",
                        autoClose: 2000,
                      });
                    }}
                  >
                    -
                  </button>
                  <input className="qty-input" value={item.qty} />
                  <button
                    className="plus-minus"
                    onClick={() => {
                      cartDispatch({ type: "INCREASE_QTY", payload: item._id });
                      toast.success("Product count incremented ", {
                        position: "top-right",
                        autoClose: 2000,
                      });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="btn-default cart-btn"
                onClick={() => {
                  cartDispatch({ type: "REMOVE_FROM_CART", payload: item._id });
                  toast.error("Product Removed from Cart ", {
                    position: "top-right",
                    autoClose: 2000,
                  });
                }}
              >
                Remove from cart
              </button>
              {wishlistState.wishlist.some(
                (cartItem) => cartItem._id === item._id
              ) ? (
                <button
                  className="btn-default btn-dark cart-btn"
                  onClick={() => {
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item._id,
                    });
                    toast.error("Product removed from Wishlist ", {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  }}
                >
                  Remove from wishlist
                </button>
              ) : (
                <button
                  className="btn-default btn-dark cart-btn"
                  onClick={() => {
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: item,
                    });
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item._id,
                    });
                    toast.success("Product Moved to Wishlist ", {
                      position: "top-right",
                      autoClose: 2000,
                    });
                  }}
                >
                  Move to wishlist
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export { CartItem };
