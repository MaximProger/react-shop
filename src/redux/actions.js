import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  LOAD_PRODUCTS,
  REMOVE_PRODUCT,
  CREATE_PRODUCT,
} from "./types";
import axios from "axios";

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const res = await axios.get("https://fakestoreapi.com/products?limit=6");
      dispatch({
        type: LOAD_PRODUCTS,
        data: res.data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(loaderOff());
    }
  };
}

export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    data: id,
  };
}

export function createProduct(product) {
  return {
    type: CREATE_PRODUCT,
    data: product,
  };
}
