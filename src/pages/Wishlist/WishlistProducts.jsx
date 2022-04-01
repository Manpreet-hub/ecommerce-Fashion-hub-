import { Link } from "react-router-dom";
import { useCart, useWishList } from "../../contexts";

const WishlistProducts=()=>{
    const {wishlistState,wishlistDispatch} =useWishList();
    const {wishlist} =wishlistState;
    const {cartDispatch}=useCart();
    console.log(wishlist);
    return(
       <>
        <div className="wishlist-container ">
        <h2 className="txt-center">My wishlist {wishlist.length}</h2>
      
        {   
            wishlist.map((item)=>{
                return (
                    <div className="wishList-col ">
                    <div className="card  product-card">
                    <div className="cross-icon">
                    <i className="far fa-times" onClick={()=> wishlistDispatch({type: "REMOVE_FROM_WISHLIST" , payload:item._id})}></i>
                    </div>
                    <img className="card-img" src={item.img} alt="product-img"/>
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p>{item.price}</p>
                    <p >Rating : {item.rating}</p>
                    <button className="btn-default btn-primary-solid" onClick={()=>{cartDispatch({type: "ADD_TO_CART", payload:item})
                    wishlistDispatch({type: "REMOVE_FROM_WISHLIST" , payload:item._id})}
                }>
                        <Link to="/cart" >Go to Cart</Link>
                    </button>
                </div>
                </div>

     </div>
                )
            })
        }
            </div>
       </>
    )
}

export {WishlistProducts};