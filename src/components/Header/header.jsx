import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./header.scss";

const header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default header;
