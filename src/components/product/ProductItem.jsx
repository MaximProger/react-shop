import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { removeProduct } from '../../redux/actions';

function ProductItem({product}) {

  const dispatch = useDispatch();

  const handleDelete = evt => {
    evt.preventDefault();
    dispatch(removeProduct(product.id))
  }

  let navigate = useNavigate();

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }

  return (<div className="col">
  <div className="card">
    <img src={product.image} className="card-img-top" alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{truncate(product.title, 20)}</h5>
      <p className="card-text">
        {truncate(product.description, 50)}
      </p>
      <button
        className="btn btn-success mx-2"
        onClick={() => navigate(`/products/${product.id}`, { replace: true })}
      >
        View
      </button>
      <button
        href="#"
        className="btn btn-primary"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
</div> );
}

export default ProductItem;