import { useProductFilters } from "../contexts/filter-context";

const Filters=()=>{

    const {filterState, filterDispatch}=useProductFilters();
    const {clear,sortBy,category,price}=filterState;

    return(
        <div className="sidebar-container">
        <div className="flex-row space-between container-box">
            <h3>Filters</h3>
            <p className="clear-filter" onClick={(e) =>filterDispatch({ type: "CLEAR_ALL" }) }><u>Clear</u></p>
        </div>
        <div className="container-box">
            <h3>Price</h3>
            <div className="price-range ">
                <div className="flex-row space-between">
                    <option value="1000" label="1000"></option>
                    <option value="3000" label="3000"></option>
                    <option value="5000" label="5000"></option>

                </div>
                <input className="price-range"   type="range"
          name=""
          step="1000"
          min="1000"
          max="5000"
          value={price} onChange={(e)=>{filterDispatch ({type:"PRICE_RANGE" ,payload: e.target.value})}} />
            </div>
        </div>

        <div className="container-box">
            <h3>Category</h3>

            <div className="category">
                <input id="men" type="checkbox" value="men" checked={category.includes("men")}  onClick={(e)=>{filterDispatch({type:"CATEGORY", payload: e.target.value})}}/>
                <label htmlFor="men">Men Clothing</label>
            </div>

            <div className="category">
                <input id="women" type="checkbox" value="women" checked={category.includes("women")}  onClick={(e)=>{filterDispatch({type:"CATEGORY", payload: e.target.value})}}/>
                <label htmlFor="women">Women Clothing</label>
            </div>

            <div className="category">
                <input id="kids" type="checkbox" value="kids" checked={category.includes("kids")} onClick={(e)=>{filterDispatch({type:"CATEGORY", payload: e.target.value})}}/>
                <label htmlFor="kids">Kids Clothing</label>
            </div>
        </div>

        <div className="container-box">
            <h3>Rating</h3>

            {
                [5, 4, 3, 2].map((rating,index)=>{
                    return(
                        <div className="rating-label" key={index}>
                    <input  checked={filterState.rating==rating }  type="radio" name="rating" onClick={(e)=>filterDispatch({type:"RATING", payload:rating})} />
                    <label htmlFor={rating}>{rating} ⭐ & above</label>
                </div> 
                    )  
                })
            }
          
        </div>

        <div className="container-box">
            <h3 className="bold">Sort by</h3>
            <div className="sort-label">
                <input type="radio" id="low-high" name="sort" checked={sortBy === "LOW_TO_HIGH"} value="LOW_TO_HIGH" onClick={(e)=>{filterDispatch({type:"SORT_BY_PRICE",payload: e.target.value})}}/>
                <label htmlFor="low-high">Price - Low to High</label>
            </div>
            <div className="sort-label">
                <input type="radio" id="high-low" name="sort" checked={sortBy === "HIGH_TO_LOW"} value="HIGH_TO_LOW" onClick={(e)=>{filterDispatch({type:"SORT_BY_PRICE",payload: e.target.value})}}/>
                <label htmlFor="high-low">Price - High to Low</label>
            </div>
        </div>
    </div>
    )
}

export {Filters};