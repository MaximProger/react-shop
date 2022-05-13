import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Loading from '../components/Loading'
import ProductDetail from '../components/product/ProductDetail';

function Detail() {

  const params = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProductById(params.id);
  }, []);

  async function fetchProductById(id) {
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


  return ( 
    loading ? <Loading /> : <ProductDetail product={product} />
   );
}

export default Detail;