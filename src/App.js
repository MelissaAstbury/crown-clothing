import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Homepage from "./pages/Homepage/homepage";
import ShopPage from "./pages/Shop/shop";
import Header from "./components/Header/header";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
