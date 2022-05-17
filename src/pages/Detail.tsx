import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import ProductDetail from "../components/product/ProductDetail";

function Detail(): JSX.Element {
  const params = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchProductById(params.id);
    }
  }, []);

  async function fetchProductById(id: number | string) {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products/" + id);
      setProduct(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return loading ? <Loading /> : <ProductDetail product={product} />;
}

export default Detail;
