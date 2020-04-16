import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/custom-button";
import CartItem from "../CartItem/cart-item";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/Cart/cart.selectors";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
