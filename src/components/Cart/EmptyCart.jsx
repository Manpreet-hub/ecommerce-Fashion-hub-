import {emptyCart} from "../../assets/";

const EmptyCart=()=>{
    return(

       <>
        <img className="empty-card-img" src={emptyCart} alt="empty-cart"/>
       </>
    )
}

export {EmptyCart};