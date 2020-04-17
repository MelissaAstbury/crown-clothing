// import React, {Component} from 'react';
import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionsOverview/collections-overview";
import CategoryPage from "../Category/category";

// class ShopPage extends Component
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
