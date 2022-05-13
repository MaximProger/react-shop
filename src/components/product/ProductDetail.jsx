function ProductDetail({product}) {
  return ( <div className="card">
  <img src={product.image} className="card-img-top card-img-top--detail" alt={product.title} />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">
      {product.description}
    </p>
  </div>
</div> );
}

export default ProductDetail;