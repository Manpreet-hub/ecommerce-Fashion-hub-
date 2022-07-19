import { Filters, ProductCard } from "../../components/";
import { Header } from "../../components/homepage/Header";
import { useProductFilters } from "../../contexts/";
import {
  getCategoryFilter,
  getPricedFilter,
  getRatedFilter,
  getsortedProducts,
  getSearchedProducts,
} from "../../utils/filter-utils";

const Products = () => {
  const { filterState } = useProductFilters();
  const { sortBy, rating, price, category, search } = filterState;
  const sortedProducts = getsortedProducts([...filterState.product], sortBy);
  const ratedFilter = getRatedFilter(sortedProducts, rating);
  const pricedFilter = getPricedFilter(ratedFilter, price);
  const categoryFilter = getCategoryFilter(pricedFilter, category);
  const filteredAfterSearch = getSearchedProducts(categoryFilter, search);

  return (
    <>
      <Header />
      <Filters />
      <div className="main-container">
        <p className="products-qty">
          Showing all products ({categoryFilter.length} products)
        </p>
        <div className="product-container">
          {filteredAfterSearch.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export { Products };
