import { Link } from "react-router-dom";
import { useCart, useWishList } from "../../contexts";

const WishlistProducts = () => {
  const { wishlistState, wishlistDispatch } = useWishList();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;

  return (
    <>
      <div className="wishlist-container ">
        <h2 className="txt-center">My wishlist {wishlist.length}</h2>

        {wishlistState.wishlist.map((item) => {
          return (
            <div className="wishList-col ">
              <div className="card product-card">
                <div className="cross-icon">
                  <i
                    className="far fa-times"
                    onClick={() =>
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: item._id,
                      })
                    }
                  ></i>
                </div>
                <img
                  className="card-img product-img"
                  src={item.img}
                  alt="product-img"
                />
                <div className="card-body">
                  <h3 className="card-title card-text">{item.title}</h3>
                  <div className="flex-row space-between">
                    <p className="card-text">
                      ₹{item.price}{" "}
                      <s className="price-strike"> ₹{item.originalPrice}</s>
                    </p>

                    <p className="card-rating">{item.rating} ⭐</p>
                  </div>

                  {cartState.cart.some(
                    (cartItem) => cartItem.id === item.id
                  ) ? (
                    <button className="btn-default btn-primary-solid cart-btn">
                      <Link to="/cart">Go to cart</Link>
                    </button>
                  ) : (
                    <button
                      className="btn-default btn-dark cart-btn"
                      onClick={() =>
                        cartDispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        })
                      }
                    >
                      Move to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { WishlistProducts };
