import { useState } from "react";
import ProductItem from "./ProductItem";
import { IProduct, IProductsList } from "../../types/product";

function ProductList({ products }: IProductsList): JSX.Element {
  if (!products.length) {
    return <h1>Products list is empty</h1>;
  }

  return (
    <div>
      <div className="product-list">
        <h1 className="mb-4">List of products</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
