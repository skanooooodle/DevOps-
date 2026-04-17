const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">{props.price}</p>
      <button className="add-btn">ADD TO CART</button>
    </div>
  );
};

export default ProductCard;