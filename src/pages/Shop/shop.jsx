// import React, {Component} from 'react';
import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionsOverview/collections-overview";
import CollectionPage from "../Collection/collection";

// class ShopPage extends Component
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
