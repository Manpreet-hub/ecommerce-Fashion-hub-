import "../../styles/components/RecommendProducts.css";
import {staticBrandData} from "../../constant/data.js";
import {staticCategory} from "../../constant/data.js";

const RecommendProducts=()=>{
    return(<>
    <div className="product-category-container">
    <h1 className="txt-center">Shop by Categories </h1>
        <div className="title-underline"></div>
        <div className="v-spacer-2rem"></div>  
        <div className="grid-5-column-layout">
    
        {
            staticCategory.map((productCategory,index)=>{
                return(
                    <div className="card">
                <img key={index} className="card-img product-img img img-round" src={productCategory.img} alt="product-img"/>
                <p class="p para-md">{productCategory.category}</p>
            </div>
                )  
            })
        }
        </div>

    </div>
    <div className="feature-container">
        <h1 className="txt-center">Shop by Brands</h1>
        <div className="title-underline"></div>
        <div className="v-spacer-2rem"></div>

        <div className="grid-3-column-layout">
        {staticBrandData.map((BrandImg,index)=>{
            return(
                <div key={index}className="card">
                <img className="card-img" src={BrandImg.img} alt="product-img"/>
            </div> 
            )
        })}
        </div>
    </div>
  
    <div className="v-space-3rem"></div>
    <div className="v-space-3rem"></div>
    </>)
}

export {RecommendProducts};