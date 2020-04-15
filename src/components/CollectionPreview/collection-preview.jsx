import React from "react";

import CollectionItem from "../CollectionItem/collection-item";

import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            // imageUrl={item.imageUrl}
            // name={item.name}
            // price={item.price}
          />
        ))}
      {/* {items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })} */}
    </div>
  </div>
);

export default CollectionPreview;
