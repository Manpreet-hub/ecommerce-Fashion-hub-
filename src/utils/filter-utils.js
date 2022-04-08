const getsortedProducts = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort((item1, item2) => item1.price - item2.price);

  if (sortBy === "HIGH_TO_LOW")
    return [...products].sort((item1, item2) => item2.price - item1.price);

  return products;
};

const getCategoryFilter = (products, category) => {
  if (category.length === 0) return products;

  return products.filter((item) => category.includes(item.category));
};

const getRatedFilter = (products, rating) => {
  console.log(rating);
  if (rating) return products.filter((item) => item.rating >= rating);

  return products;
};

const getPricedFilter = (products, price) => {
  if (price > 0) return products.filter((item) => item.price <= price);

  return products;
};

export {
  getsortedProducts,
  getCategoryFilter,
  getRatedFilter,
  getPricedFilter,
};
