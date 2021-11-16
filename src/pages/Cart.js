import React from "react";
import { connect } from "react-redux";
import CartItems from "./CartItems";

function Cart({ shoppingCart }) {
  return (
    <div>
      {shoppingCart.map((item) => (
        <CartItems item={item} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  shoppingCart: state.cart.products,
});
export default connect(mapStateToProps, {})(Cart);
