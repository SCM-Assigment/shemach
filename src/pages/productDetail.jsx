import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import products from "../assets/data/products";
import Helmet from "../componentes/Helmet/Helmet";
import CommonSection from "../componentes/Lii/CommonSection";
import "../styles/product-detail.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import ProductList from "../componentes/Lii/ProductList";

/**
 * Component for displaying product details
 * @returns {JSX.Element} Product detail component
 */
const productDetail = () => {
  // Redux dispatch
  const dispatch = useDispatch();
  // State for related products
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Get the id parameter from the URL
  const { id } = useParams();
  // Find the product with the matching id
  const product = products.find((product) => product.id === id);

  // Destructure product properties
  const {
    imgUrl,
    productName,
    price,
    description,
    avgRating,
    shortDesc,
    category,
  } = product;

  // Function to add the product to the cart
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      })
    );
    toast.success("Item added to cart");
  };

  // Effect to filter related products based on category
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setRelatedProducts(filteredProducts);
  }, []);

  // Render the product detail component
  return (
    <Helmet title={productName}>
      <CommonSection title={`  ${category} ${productName} `} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img style={{ width: "100%" }} src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <p style={{ color: "#000" }}>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <span className="product__price">${price}</span>
                <p className="mt-3" style={{ color: "#000" }}>
                  {shortDesc}
                </p>

                <motion.button
                  whileTap={{ scale: 1.1 }}
                  onClick={addToCart}
                  className="buy_btn"
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="product-description">
        <h3 className="text-center">Product Description</h3>
        <p>{description}</p>
      </section>
      <section className="best__sales margin">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Related Products</h2>
            </Col>
            <ProductList data={relatedProducts.slice(0, 4)} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default productDetail;
