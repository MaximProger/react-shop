import axios from "axios";
import {IProduct, ProductAction, ProductActionTypes} from '../../types/product'
import { AppAction } from "../../types/app";
import { Dispatch } from "react";
import {loaderOn, loaderOff} from './app'

export function fetchProducts()   {
  return async (dispatch: Dispatch<AppAction | ProductAction>) => {
    try {
      dispatch(loaderOn());
      const res = await axios.get("https://fakestoreapi.com/products?limit=6");
      dispatch({
        type: ProductActionTypes.LOAD_PRODUCTS,
        data: res.data,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(loaderOff());
    }
  };
}

export function removeProduct(id: number) {
  return {
    type: ProductActionTypes.REMOVE_PRODUCT,
    data: id,
  };
}

export function createProduct(product: IProduct) {
  return {
    type: ProductActionTypes.CREATE_PRODUCT,
    data: product,
  };
}