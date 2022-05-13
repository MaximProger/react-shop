import {useNavigate} from 'react-router-dom'

function ProductItem({product, removeProduct}) {

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
        onClick={() => removeProduct(product.id)}
      >
        Delete
      </button>
    </div>
  </div>
</div> );
}

export default ProductItem;