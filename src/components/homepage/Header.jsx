import "../../styles/components/header.css" 

const Header=()=>{
    return (<>
      <div className="navbar">
        <div className="nav-title">Fashion-hub</div>
        <div className="search-box">
            <i className="search-icon fas fa-search" aria-hidden="true"></i>
            <input className="search-bar" type="text" placeholder="Search"/>
        </div>

        <div className="navbar-section">
            <ul className="nav-icons">
                <li><a className="navbar-links" href="/pages/signup-login/login.html"/>Login</li>
                <div className="h-space-1rem"></div>
                <li><a className="navbar-links" href="/pages/wishlist/wishlist.html">
                        <div className="badge-container">
                            <i className="fas fa-heart">
                                <span className="badge-icon">0</span>
                            </i>
                        </div>
                   </a> </li>
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
    </>)
}

export {Header};