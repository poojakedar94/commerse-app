import React, { useState } from "react";
import "./product.scss";
import { connect } from "react-redux";
import { addToBag } from "../../actions/cartActions";

function Product({ product, addToBag }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const onAddToBag = () => {
    addToBag(product);
    setAddedToCart(true);
  };
  return (
    <div className="product-container">
      <img src={product.img} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      {addedToCart ? (
        <button className="button-to-add-bag" onClick={onAddToBag}>
          <span className="text-button-go-to-bag">GO TO BAG</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      ) : (
        <button className="button-to-add-bag" onClick={onAddToBag}>
          <i className="fas fa-shopping-bag"></i>
          <span className="text-button">ADD TO BAG</span>
        </button>
      )}

      <button className="button-to-wishlist">
        <i className="far fa-heart"></i>
        <span className="text-button">WISHLIST</span>
      </button>
    </div>
  );
}
export default connect(null, { addToBag })(Product);
