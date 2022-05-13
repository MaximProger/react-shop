import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "../components/product/ProductList";
import Loading from "../components/Loading";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
      loading ? <Loading /> : <ProductList products={products} removeProduct={removeProduct} />
  );
}

export default Products;
