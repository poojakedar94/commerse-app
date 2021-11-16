import React from "react";
import "./right.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Right({ productCount }) {
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
      <Link to="/cart" className="icon-with-label">
        <i class="fas fa-shopping-bag"></i>
        {productCount > 0 && (
          <div className="count-container">
            <div>{productCount}</div>
          </div>
        )}
        <div className="icon-label">Bag</div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productCount: state.cart.count,
});
export default connect(mapStateToProps, {})(Right);
