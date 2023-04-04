import React from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Helmet from "../componentes/Helmet/Helmet";
import Services from "../services/Services";

import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img.png";
import "../styles/home.css";
const Home = () => {
	const year = new Date().getFullYear();
	return (
		<Helmet title={"Home"}>
			<section className="hero_section">
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="hero_content">
								<p className="hero_subtitle">Trending product in {year}</p>
								<h2>Make Your life easier by using multimart </h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Perferendis, blanditiis!
								</p>
								<motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
									<Link to="/shop">SHOP NOW</Link>
								</motion.button>
							</div>
						</Col>

						<Col lg="6" md="6">
							<img src={heroImage} alt="" />
						</Col>
					</Row>
				</Container>
			</section>
            <Services />
		</Helmet>
	);
};

export default Home;
