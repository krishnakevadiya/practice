import React from "react";

// get the product item details through the props
const ProductCard = ({brand,title,image,price}) => {
  return <div data-testid="productcard">
    <img src={image} alt={title} />
    <p>{title }</p>
    <p>{ brand}</p>
    <p>{ price}</p>
  </div>;
};

export default ProductCard;
