import { useState } from "react";
import ProductItem from "./ProductItem";
import Dialog from "../UI/Dialog";
import ProductForm from '../product/ProductForm'

function ProductList({products, removeProduct, createProduct, isShow, setIsShow}) {
  if (!products.length) {
    return <h1>Products list is empty</h1>
  }

  return ( 
  <div>
      <button type="button" className="btn btn-primary mb-3" onClick={() => setIsShow(true)}>
        Add product
      </button>
      {isShow && <Dialog setIsShow={setIsShow}><ProductForm create={createProduct} /></Dialog>}

      <div className="product-list">
      <h1 className="mb-4">List of products</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {products.map(product => {
        return <ProductItem product={product} key={product.id} removeProduct={removeProduct} />
      })}
      </div>
    </div>
  </div>

   );
}

export default ProductList;