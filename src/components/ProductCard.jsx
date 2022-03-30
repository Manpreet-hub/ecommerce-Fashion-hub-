import { useCart } from "../contexts/cart-context";

const ProductCard=({product})=>{
    const {cartState,cartDispatch}=useCart();
    const {cart}=cartState;
    const {title,rating,price,img,}=product;
    return( 
        <div className="grid-container">
            <div className="card product-card">
                <img className="card-img product-img" src={img} alt="product-img"/>
                <div className="card-body">
                    <h4 className="card-title"> {title}</h4>
                    <p>₹{price}</p>
                    <p >Rating : {rating}</p>

                    {
                        cart.some(p=>p.id === product.id) ?(
                            <button className="btn-default btn-primary" onClick={()=>cartDispatch({
                                type:"REMOVE_FROM_CART",
                                payload: product
                                })}>Remove from Cart</button>
                            
                        ) :(
                            <button className="btn-default btn-primary" onClick={()=>cartDispatch({
                                type:"ADD_TO_CART",
                                payload:product
                                })}>Add to Cart</button>
                        )
                    }
                </div>
            </div>
            </div>)
}

export {ProductCard};

