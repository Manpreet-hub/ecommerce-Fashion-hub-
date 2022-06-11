import { useCart, useWishList } from "../../contexts/";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { title, rating, price, img, originalPrice } = product;
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishList();

  return (
    <div className="grid-container">
      <div className="card product-card">
        <img className="card-img product-img" src={img} alt="product-img" />
        <div className="card-body">
          <h4 className="card-title card-text"> {title}</h4>
          <div className="flex-row space-between">
            <p className="card-text">
              ₹{price} <s className="price-strike"> ₹{originalPrice}</s>
            </p>

            <p className="card-rating">{rating} ⭐</p>
          </div>

          <div className="product-card-btn">
            {cart.some((cartItem) => cartItem.id === product.id) ? (
              <button className="card-btn btn-primary-solid">
                <Link to="/cart">Go to Cart</Link>
              </button>
            ) : (
              <button
                className="card-btn btn-primary-solid"
                onClick={() => {
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                  toast.success("Product Added to Cart", {
                    position: "top-right",
                    autoClose: 2000,
                  });
                }}
              >
                Add to Cart
              </button>
            )}
            {wishlist.some((wishlistItem) => wishlistItem.id === product.id) ? (
              <button className="card-btn btn-dark">
                <Link to="/wishlist">Go to wishlist</Link>
              </button>
            ) : (
              <button
                className="card-btn btn-primary-solid"
                onClick={() => {
                  wishlistDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                  });
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product.id,
                  });
                  toast.success("Product Added to Wishlist", {
                    position: "top-right",
                    autoClose: 2000,
                  });
                }}
              >
                Add to wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
