import React, { useState, createRef } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/action-creators/product";

interface IProductFormProps {
  setIsShow(show: boolean): void;
}

function ProductForm({ setIsShow }: IProductFormProps): JSX.Element {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const dispatch = useDispatch();

  function onFileChange(evt: React.ChangeEvent<HTMLInputElement>) {
    var files = evt.target.files;
    if (!files?.length) return;
    createImage(files[0]);
  }
  function createImage(file: Blob) {
    const image = new Image();
    const reader = new FileReader();

    reader.onload = (evt) => {
      if (evt.target) {
        setProduct({ ...product, image: evt.target.result as string });
      }
    };

    reader.readAsDataURL(file);
  }

  function submitFormHandler(evt: React.SyntheticEvent) {
    evt.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now(),
    };
    dispatch(createProduct(newProduct));
    setIsShow(false);
    setProduct({
      title: "",
      description: "",
      image: "",
      price: "",
      category: "",
    });
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          value={product.title}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setProduct({ ...product, title: evt.target.value })
          }
          type="text"
          className="form-control"
          id="title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          value={product.description}
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
            setProduct({ ...product, description: evt.target.value })
          }
          className="form-control"
          name="description"
          id="description"
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            onFileChange(evt)
          }
          type="file"
          className="form-control"
          id="image"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
