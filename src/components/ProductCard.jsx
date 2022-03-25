const ProductCard=({product})=>{

    const {title,rating,price,img,}=product;
    return( 
        <div className="grid-container">
            <div className="card product-card">
                <img className="card-img product-img" src={img} alt="product-img"/>
                <div className="card-body">
                    <h4 className="card-title"> {title}</h4>
                    <p>₹{price}</p>
                    <p >Rating : {rating}</p>
                    <button className="btn-default btn-primary">Add to Cart</button>
                </div>
            </div>
            </div>)
}

export {ProductCard};

