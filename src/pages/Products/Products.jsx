import { Filters, ProductCard } from "../../components/";
import { Header } from "../../components/homepage/Header";
import { useProductFilters } from "../../contexts/";
import {
  getCategoryFilter,
  getPricedFilter,
  getRatedFilter,
  getsortedProducts,
} from "../../utils/filter-utils";

const Products = () => {
  const { filterState } = useProductFilters();
  const { sortBy, rating, price, category } = filterState;
  const sortedProducts = getsortedProducts([...filterState.product], sortBy);
  const ratedFilter = getRatedFilter(sortedProducts, rating);
  const pricedFilter = getPricedFilter(ratedFilter, price);
  const categoryFilter = getCategoryFilter(pricedFilter, category);

  return (
    <>
      <Header />
      <Filters />
      <div className="product-container">
        <p>Showing all products ({categoryFilter.length} products)</p>
        <div className="grid-container">
          {categoryFilter.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export { Products };
