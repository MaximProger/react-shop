import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";
import Loading from "../components/Loading";
import Dialog from "../components/UI/Dialog";
import ProductForm from "../components/product/ProductForm";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

function Products() {
  const products = useTypedSelector((state) => state.productReducer.products);
  const loading = useTypedSelector((state) => state.appReducer.loading);
  const [isShow, setIsShow] = useState(false);
  const { fetchProducts } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={() => setIsShow(true)}
      >
        Add product
      </button>
      {isShow && (
        <Dialog setIsShow={setIsShow}>
          <ProductForm setIsShow={setIsShow} />
        </Dialog>
      )}
      {loading ? <Loading /> : <ProductList products={products} />}
    </div>
  );
}

export default Products;
