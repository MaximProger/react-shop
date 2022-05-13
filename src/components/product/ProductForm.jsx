import { useState, createRef } from "react";

function ProductDialog({create}) {

  const [product, setProduct] = useState({title: "", description: "", image: ""})

  function onFileChange(evt) {
    var files = evt.target.files || evt.dataTransfer.files;
    if (!files.length) return;
    createImage(files[0]);
  }
  function createImage(file) {
    const image = new Image();
    const reader = new FileReader();

    reader.onload = (evt) => {
      setProduct({...product, image: evt.target.result})
    };

    reader.readAsDataURL(file);
  }

  function submitFormHandler(evt) {
    evt.preventDefault();
    const newProduct = {
      ...product, id: Date.now()
    }
    create(newProduct)
    setProduct({title: "", description: "", image: ""})
  }

  return (
    <form onSubmit={submitFormHandler}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input
        value={product.title}
        onChange={evt => setProduct({...product, title: evt.target.value})}
        type="text"
        className="form-control"
        id="title"
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea
        value={product.description}
        onChange={evt => setProduct({...product, description: evt.target.value})}
        className="form-control"
        name="description"
        id="description"
        required
      ></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="image" className="form-label">Image</label>
      <input
        onChange={(evt) => onFileChange(evt)}
        type="file"
        className="form-control"
        id="image"
      />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}

export default ProductDialog;