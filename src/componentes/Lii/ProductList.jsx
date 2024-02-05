import React from "react";
import ProductCard from "./ProductCard";

/**
 * Component to render a list of products
 * @param {Array} data - Array of product data
 */
const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductList;
