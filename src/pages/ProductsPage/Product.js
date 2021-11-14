import React from "react";
import "./product.scss";

export default function Product({ product }) {
  return (
    <div className="product-container">
      <img src={product.img} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  );
}
