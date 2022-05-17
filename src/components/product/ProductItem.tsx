import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../../redux/actions";
import { IProduct } from "../../types/types";

interface IProductProps {
  product: IProduct;
}

function ProductItem({ product }: IProductProps): JSX.Element {
  const dispatch = useDispatch();

  const handleDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(removeProduct(product.id));
  };

  let navigate = useNavigate();

  function truncate(str: string, maxlength: number): string {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }

  return (
    <div className="col">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{truncate(product.title, 20)}</h5>
          <p className="card-text">{truncate(product.description, 50)}</p>
          <button
            className="btn btn-success mx-2"
            onClick={() =>
              navigate(`/products/${product.id}`, { replace: true })
            }
          >
            View
          </button>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
