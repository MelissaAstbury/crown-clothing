import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/custom-button";
import CartItem from "../CartItem/cart-item";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/Cart/cart.selectors";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cartItems.length ? (
      cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
