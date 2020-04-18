import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./header.scss";
import CartIcon from "../../components/CartIcon/cart-icon";
import CartDropDown from "../CartDropDown/cart-dropdown";
import { selectCartHidden } from "../../redux/Cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {/* <Link className="option" to="/shop">
          CONTACT
        </Link> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(header);
