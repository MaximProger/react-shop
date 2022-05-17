import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";
import Loading from "../components/Loading";
import Dialog from "../components/UI/Dialog";
import ProductForm from "../components/product/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions";

function Products() {
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.appReducer.loading);
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
      {loading ? (
        <Loading />
      ) : (
        <ProductList
          products={products}
          isShow={isShow}
          setIsShow={setIsShow}
        />
      )}
    </div>
  );
}

export default Products;
