import "../../styles/components/RecommendProducts.css";
import { staticBrandData } from "../../constant/data.js";
import { staticCategory } from "../../constant/data.js";
import { useProductFilters } from "../../contexts/filter-context";
import menShirt from "../../assets/images/men-shirt.jpg";
import kids from "../../assets/images/kids.jpg";
import womenDress from "../../assets/images/women-dress.jpg";

import { Link } from "react-router-dom";

const RecommendProducts = () => {
  const { filterState, filterDispatch } = useProductFilters();
  const categoryHandler = (e) => {
    filterDispatch({ type: "CATEGORY", payload: e });
  };
  return (
    <>
      <div className="feature-container">
        <h1 className="txt-center">Shop by Categories </h1>
        <div className="title-underline"></div>
        <div className="v-spacer-2rem"></div>
        <div className="grid-3-column-layout">
          <div className="card">
            <Link
              to="/products"
              onClick={(e) =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: "Men",
                })
              }
            >
              <img className="card-img product-img" src={menShirt} />
            </Link>
          </div>
          <div className="card">
            <Link
              to="/products"
              onClick={(e) =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: "Kids",
                })
              }
            >
              <img className="card-img product-img" src={kids} />
            </Link>
          </div>
          <div className="card">
            <Link
              to="/products"
              onClick={(e) =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: "Women",
                })
              }
            >
              <img className="card-img product-img" src={womenDress} />
            </Link>
          </div>
        </div>
      </div>

      <div className="v-space-3rem"></div>
      <div className="v-space-3rem"></div>
    </>
  );
};

export { RecommendProducts };
