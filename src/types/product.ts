export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IProductsList {
  products: IProduct[];
}

export enum ProductActionTypes {
  LOAD_PRODUCTS = "LOAD_PRODUCTS",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CREATE_PRODUCT = "CREATE_PRODUCT"
}

interface LoadProducts {
  data: IProduct[];
  type: ProductActionTypes.LOAD_PRODUCTS;
}

interface RemoveProduct {
  data: number;
  type: ProductActionTypes.REMOVE_PRODUCT
}

interface CreateProduct {
  data: IProduct;
  type: ProductActionTypes.CREATE_PRODUCT
}

export type ProductAction = LoadProducts | RemoveProduct | CreateProduct