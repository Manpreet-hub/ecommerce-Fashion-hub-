import "../../styles/components/header.css";
import { Link } from "react-router-dom";
import { useCart, useWishList } from "../../contexts/";

const Header = () => {
  const {
    cartState: { cart },
  } = useCart();
  const {
    wishlistState: { wishlist },
  } = useWishList();
  return (
    <div className="navbar">
      <div className="nav-title">
        <Link to="/">Fashion-hub</Link>
      </div>
      <div className="search-box">
        <i className="search-icon fas fa-search" aria-hidden="true"></i>
        <input className="search-bar" type="text" placeholder="Search" />
      </div>

      <div className="navbar-section">
        <ul className="nav-icons">
          <li>
            <Link to="/login" className="navbar-links">
              Login
            </Link>
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
