import React, { useRef, useEffect } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import "./header.css";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";

import { useSelector } from "react-redux";

import useAuth from "../../custom-hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

// Navigation links
const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

/**
 * Header component
 */
const header = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  // Toggle menu visibility
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  // Toggle profile actions visibility
  const actionToggle = () =>
    profileActionRef.current.classList.toggle("show__profile__actions");

  // Navigate to cart page
  const navigateToCart = () => {
    navigate("/cart");
  };

  // Navigate to home page
  const navigateToHome = () => {
    navigate("/home");
  };

  // Logout user
  const Logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    // Header section
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo" onClick={navigateToHome}>
              <img src={logo} alt="logo" />
              <h1>Multimart</h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((link, index) => {
                  return (
                    // Navigation links
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="cart__icon">
                <i onClick={navigateToCart} class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt="user_icon"
                  style={{ borderRadius: "50%" }}
                  onClick={actionToggle}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={actionToggle}
                >
                  {currentUser ? (
                    // Logout action
                    <span onClick={Logout}>Logout</span>
                  ) : (
                    // Signup and Login links
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default header;
