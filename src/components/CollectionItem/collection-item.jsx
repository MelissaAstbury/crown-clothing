import React from "react";
import { connect } from "react-redux";

// import CustomButton from "../CustomButton/custom-button";
import { addItem } from "../../redux/Cart/cart.actions";

// import "./collection-item.scss";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

// const CollectionItem = ({ item, addItem }) => {
//   const { name, price, imageUrl } = item;
//   return (
//     <div className="collection-item">
//       <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
//       <div className="collection-footer">
//         <span className="name">{name}</span>
//         <span className="price">{price}</span>
//       </div>
//       <CustomButton onClick={() => addItem(item)} inverted>
//         Add to Cart
//       </CustomButton>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

// export default connect(null, mapDispatchToProps)(CollectionItem);
