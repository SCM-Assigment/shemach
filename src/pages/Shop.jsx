import React, { useState } from "react";
import CommonSection from "../componentes/Lii/commonSection";
import Helmet from "../componentes/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../componentes/Lii/productList";

/**
 * Functional component representing the shop page.
 */
const shop = () => {
  /**
   * State to store the products and update the product list based on filtering, sorting, or searching.
   */
  const [product, setProduct] = useState(products);

  /**
   * Handler for filtering products based on category.
   * @param {Object} e - The event object
   */
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const newProduct = products.filter((item) => item.category === "sofa");
      setProduct(newProduct);
    }
    // ... (similar blocks for other categories)
  };

  /**
   * Handler for sorting products based on price.
   * @param {Object} e - The event object
   */
  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue === "ascending") {
      const newProduct = [...product].sort((a, b) => a.price - b.price);
      setProduct(newProduct);
    }
    // ... (similar block for descending sort)
  };

  /**
   * Handler for searching products based on product name.
   * @param {Object} e - The event object
   */
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProduct(searchProduct);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section className="margin">
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort By Price</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {product.length === 0 ? (
              <h1 className="text-center fs-4">No products found</h1>
            ) : (
              <ProductList data={product} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default shop;
