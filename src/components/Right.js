import React from "react";
import "./right.scss";

function Right() {
  return (
    <div className="right-container">
      <div className="icon-with-label">
        <i class="fas fa-user"></i>
        <div className="icon-label">Profile</div>
      </div>
      <div className="icon-with-label">
        <i class="fas fa-heart"></i>
        <div className="icon-label">Wishlist</div>
      </div>
      <div className="icon-with-label">
        <i class="fas fa-shopping-bag"></i>
        <div className="icon-label">Bag</div>
      </div>
    </div>
  );
}
export default Right;
