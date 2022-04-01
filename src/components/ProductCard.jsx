import { useCart } from "../contexts/cart-context";
import { useWishList } from "../contexts/wishlist-context";
import { Link } from "react-router-dom";

const ProductCard=({product})=>{
    const {cartState,cartDispatch}=useCart();
    const {cart}=cartState;
    const {title,rating,price,img,}=product;
    const {wishlistState:{ wishlist },wishlistDispatch}=useWishList();

    return( 
        <div className="grid-container">
            <div className="card product-card">
                <img className="card-img product-img" src={img} alt="product-img"/>
                <div className="card-body">
                    <h4 className="card-title"> {title}</h4>
                    <p>₹{price}</p>
                    <p >Rating : {rating}</p>
                    <div className="product-card-btn">

                    {
                        cart.some(cartItem=>cartItem.id === product.id) ?
                        (
                            <button className="card-btn btn-primary-solid">
                                <Link to="/cart">Go to Cart</Link>
                            </button>)

                        :  (
                            <button className="card-btn btn-primary-solid" onClick={()=>cartDispatch({
                                type:"ADD_TO_CART",
                                payload:product
                                })}>Add to Cart</button>
                        ) 
                            
                        
                    }
                    {   wishlist.some(wishlistItem=> wishlistItem.id === product.id) ? 
                        (<button className="card-btn btn-dark">
                            <Link to="/wishlist">Go to wishlist</Link>
                        </button>) :
                       (
                        <button className="card-btn btn-primary-solid" onClick={()=>{wishlistDispatch({
                            type:"ADD_TO_WISHLIST",
                            payload:product
                            })
                            cartDispatch({type:"REMOVE_FROM_CART" , payload:product.id})}
                        }>Add to wishlist</button>
                    ) 
                                }

                    
                    </div>
                </div>
            </div>
            </div>)
}

export {ProductCard};

