import { IProductsList, ProductAction, ProductActionTypes } from "../../types/product";

const initialState: IProductsList = {
  products: [],
};

export const productReducer = (state = initialState, action: ProductAction): IProductsList => {
  switch (action.type) {
    case ProductActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    case ProductActionTypes.REMOVE_PRODUCT:
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
    case ProductActionTypes.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.data],
      };
    default:
      return state;
  }
};
