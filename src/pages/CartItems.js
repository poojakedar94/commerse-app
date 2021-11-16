import React from "react";
import "./cartItems.scss";
export default function CartItems({ item }) {
  return (
    <div className="cart-item-container">
      <img src={item.img} />

      <div className="info-container">
        <h3>{item.brand}</h3>
        <h4>{item.description}</h4>
        <p>{item.price}</p>
        <button>
          <i className="fas fa-times fa-lg"></i>
        </button>
      </div>
    </div>
  );
}
