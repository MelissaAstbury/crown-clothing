// import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../CollectionPreview/collection-preview";

// import { selectCollectionsForPreview } from "../../redux/Shop/shop.selectors";

// import "./collections-overview.scss";

// const CollectionsOverview = ({ collections }) => (
//   <div className="collections-overview">
//     {collections.map(({ id, ...otherCollectionProps }) => (
//       <CollectionPreview key={id} {...otherCollectionProps} />
//     ))}
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview,
// });

// export default connect(mapStateToProps)(CollectionsOverview);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview/collection-preview";

import { selectCollectionsForPreview } from "../../redux/Shop/shop.selectors";

import { CollectionsOverviewContainer } from "./colections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
