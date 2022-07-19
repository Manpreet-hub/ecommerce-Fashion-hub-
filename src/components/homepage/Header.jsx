import "../../styles/components/header.css";
import { Link } from "react-router-dom";
import {
  useCart,
  useWishList,
  useAuth,
  useProductFilters,
} from "../../contexts/";
import { toast } from "react-toastify";

const Header = () => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useAuth();
  const {
    cartState: { cart },
  } = useCart();
  const {
    wishlistState: { wishlist },
  } = useWishList();
  const {
    filterState: { search },
    filterDispatch,
  } = useProductFilters();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({ type: "RESET_AUTH" });
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="navbar">
      <div className="nav-title">
        <Link to="/" className="nav-title">
          Fashion-hub
        </Link>
      </div>
      <div className="search-box">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) =>
            filterDispatch({ type: "SEARCH_QUERY", payload: e.target.value })
          }
        />
        <div className="search-icon">
          <i className=" fas fa-search" aria-hidden="true"></i>
        </div>
      </div>

      <div className="navbar-section">
        <ul className="nav-icons">
          <li>
            {isAuthenticated ? (
              <Link
                to="/products"
                className="navbar-links"
                onClick={logoutHandler}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" className="navbar-links">
                Login
              </Link>
            )}
          </li>
          <div className="h-space-1rem"></div>
          <li>
            <Link to="/wishlist" className="navbar-links">
              <div className="badge-container">
                <i className="far fa-heart">
                  <span className="badge-icon status-badge-offline status-badgestatus-badge-offline status-badge">
                    {wishlist.length}
                  </span>
                </i>
              </div>
            </Link>
          </li>
          <div className="h-space-1rem"></div>

          <li>
            <Link className="navbar-links" to="/cart">
              <div className="badge-container">
                <i className="far fa-shopping-cart">
                  <span className="badge-icon status-badge-offline status-badge">
                    {cart.length}
                  </span>
                </i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
