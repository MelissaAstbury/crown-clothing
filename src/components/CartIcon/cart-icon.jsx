import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/Cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
