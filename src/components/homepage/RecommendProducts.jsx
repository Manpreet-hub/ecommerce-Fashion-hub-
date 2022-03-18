import "../../styles/components/RecommendProducts.css";
import brandArmani from "../../assets/images/armani.jpg";
import brandGucci from "../../assets/images/gucci.jpg";
import brandNorthFace from "../../assets/images/northFace.jpg";

import suit from "../../assets/images/suit.jpg";
import whiteShirt from "../../assets/images/man-white-shirt.jpg";
import dress from "../../assets/images/dress.jpg";
import jeans from "../../assets/images/blue-jeans.jpg";
import tShirt from "../../assets/images/black-t-shirt.jpg";



const RecommendProducts=()=>{
    return(<>
    <div className="product-category-container">
    <h1 className="txt-center">Shop by Categories </h1>
        <div className="title-underline"></div>
        <div className="v-spacer-2rem"></div>  
        <div className="grid-5-column-layout">
        <div className="card">
                <img className="card-img product-img img img-round" src={suit} alt="product-img"/>
                <p class="p para-md">Suits</p>
            </div> 
            <div className="card">
                <img className="card-img product-img img img-round" src={tShirt} alt="product-img"/>
                <p class="p para-md">T-Shirts</p>
            </div> 

            <div className="card">
                <img className="card-img product-img img img-round" src={whiteShirt} alt="product-img"/>
                <p class="p para-md">Shirts</p>
            </div> 

            <div className="card">
                <img className="card-img product-img img img-round" src={dress} alt="product-img"/>
                <p class="p para-md">Dresses</p>
            </div> 

            <div className="card">
                <img className="card-img product-img img img-round" src={jeans} alt="product-img"/>
                <p class="p para-md">Jeans</p>
            </div> 
        </div>



    </div>
    <div className="feature-container">
        <h1 className="txt-center">Shop by Brands</h1>
        <div className="title-underline"></div>
        <div className="v-spacer-2rem"></div>

        <div className="grid-3-column-layout">

            <div className="card">
                <img className="card-img" src={brandArmani} alt="product-img"/>
            </div>
            <div className="card">
                <img className="card-img" src={brandGucci} alt="product-img"/>
            </div>
            <div className="card">
                <img className="card-img" src={brandNorthFace} alt="product-img"/>
            </div>
        </div>
    </div>

    <div className="v-space-3rem"></div>
    <div className="v-space-3rem"></div>
    </>)
}

export {RecommendProducts};