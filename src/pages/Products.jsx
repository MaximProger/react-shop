import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";
import Loading from "../components/Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products?limit=6");
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function removeProduct(id) {
    setProducts(products.filter(product => product.id !== id))
  }

  function createProduct(product) {
    setProducts([...products, product])
    setIsShow(false)
  }

  return (
      loading ? <Loading /> : <ProductList products={products} createProduct={createProduct} removeProduct={removeProduct} isShow={isShow} setIsShow={setIsShow} />
  );
}

export default Products;
