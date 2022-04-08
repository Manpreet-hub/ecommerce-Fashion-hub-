const initialFilterState = {
  clear: false,
  includeOutOfStock: true,
  fastDelivery: false,
  price: "",
  rating: "",
  sortBy: "",
  category: [],
  product: [],
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "INIT_PRODUCTS":
      return { ...state, product: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sortBy: action.payload };
    case "PRICE_RANGE":
      return { ...state, price: action.payload };
    case "CATEGORY":
      return {
        ...state,
        category: state.category.includes(action.payload)
          ? state.category.filter((value) => value !== action.payload)
          : [...state.category, action.payload],
      };
    case "RATING":
      return { ...state, rating: action.payload, clear: false };
    case "CLEAR_ALL":
      return {
        ...state,
        product: state.product,
        sortBy: "",
        rating: "",
        price: "",
        category: [],
        clear: true,
      };
  }
};

export { initialFilterState, filterReducer };
