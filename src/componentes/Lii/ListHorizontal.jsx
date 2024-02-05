import React from "react";
import ProductCard from "./ProductCard";

/**
 * Component for rendering a horizontal list of products
 * @param {Array} data - Array of product data to be displayed
 */
const ListHorizontal = ({ data }) => {
  // Render a container for the horizontal list
  return (
    <div
      className="container-fluid py-2"
      style={{ overflowX: "auto", height: "400px" }}
    >
      {/* Render a flex container for the list items */}
      <div className="d-flex flex-row flex-nowrap">
        {/* Map over the data array and render a ProductCard component for each item */}
        {data?.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListHorizontal;
