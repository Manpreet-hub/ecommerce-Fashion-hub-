import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer,initialFilterState } from "../reducers/filter-reducer";
import axios from 'axios';

const ProductFiltersContext=createContext();
const useProductFilters=()=>useContext(ProductFiltersContext);

const FilterProvider=({ children })=>{
    const [filterState, filterDispatch]=useReducer(filterReducer,initialFilterState);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/api/products");
                filterDispatch({ type: "INIT_PRODUCTS", payload: data.products })
            }
            catch (e) {
                console.log("Error: ", e);
            }
        })();
    }, [])

  return(
      <ProductFiltersContext.Provider value={{filterState,filterDispatch}}>
          {children}
      </ProductFiltersContext.Provider>
  )  
}

export {FilterProvider,useProductFilters};