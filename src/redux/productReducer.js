import { LOAD_PRODUCTS, REMOVE_PRODUCT, CREATE_PRODUCT } from "./types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    case REMOVE_PRODUCT:
      return (() => {
        const id = action.data;
        const { products } = state;
        const filteredProducts = products.filter(
          (product) => product.id !== id
        );
        return {
          ...state,
          products: filteredProducts,
        };
      })();
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.data],
      };
    default:
      return state;
  }
};
