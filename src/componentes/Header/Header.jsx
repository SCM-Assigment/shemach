import React, { useRef, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import "./header.css";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";

import { useSelector } from "react-redux";

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

const header = () => {
	const navigate = useNavigate();
	const totalQuantity = useSelector(state => state.cart.totalQuantity)
	const menuRef = useRef(null);

	const menuToggle = () => menuRef.current.classList.toggle("active__menu");
	useEffect(() => {});  

	const navigateToCart = () => {
		navigate("/cart");
	};

	const navigateToHome = () =>{
		navigate("/home")
	}
	return (
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
								{/* <li className="nav__item">
									<NavLink to="home">Home</NavLink>
								</li>
								<li className="nav__item">
									<NavLink to="Shop">Shop</NavLink>
								</li>
								<li className="nav__item">
									<NavLink to="Cart">Cart</NavLink>
								</li> */}
								{nav__links.map((link, index) => {
									return (
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
							<span>
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={user_icon}
									alt="user_icon"
								/>
							</span>
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
