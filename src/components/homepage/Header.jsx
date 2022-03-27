import "../../styles/components/header.css";
import { Link } from "react-router-dom";


const Header=()=>{
    return (
      <div className="navbar">
        <div className="nav-title"><Link to="/">Fashion-hub</Link></div>
        <div className="search-box">
            <i className="search-icon fas fa-search" aria-hidden="true"></i>
            <input className="search-bar" type="text" placeholder="Search"/>
        </div>

        <div className="navbar-section">
            <ul className="nav-icons">
                <li><Link to="/login" className="navbar-links" >Login </Link></li>
                <div className="h-space-1rem"></div>
                <li><Link to="" className="navbar-links" >
                        <div className="badge-container">
                            <i className="fas fa-heart">
                                <span className="badge-icon">0</span>
                            </i>
                        </div>
                   </Link> </li>
                <div className="h-space-1rem"></div>

                <li><a className="navbar-links" href="/pages/cart/cart.html">
                        <div className="badge-container">
                            <i className="fas fa-shopping-cart">
                                <span className="badge-icon">0</span>
                            </i>
                        </div>
                    </a></li>
            </ul>
        </div>
    </div>
   )
}

export {Header};