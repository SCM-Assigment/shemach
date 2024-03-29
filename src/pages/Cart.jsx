import React from "react";
import "../styles/cart.css";
import Helmet from "../componentes/Helmet/Helmet";
import CommonSection from "../componentes/Lii/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

/**
 * Functional component for the Cart page
 * @returns {JSX.Element} Cart page JSX
 */
const Cart = () => {
  // Select cart items and total amount from Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Cart" />
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No items in the Cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <div>
                <button className="buy_btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy_btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

/**
 * Functional component for table rows in the cart
 * @param {Object} props - item object
 * @returns {JSX.Element} Table row JSX
 */
const Tr = ({ item }) => {
  const dispatch = useDispatch();

  /**
   * Deletes the item from the cart
   */
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteItem}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
