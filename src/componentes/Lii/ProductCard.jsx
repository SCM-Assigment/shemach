import React from "react";
import { Link } from "react-router-dom";

import {
	Col,
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
} from "reactstrap";
import { motion } from "framer-motion";

import "../../styles/product-card.css";

const ProductCard = ({item}) => {
	return (
		<Col lg="3" md="4">
			<Card
				className="product__item"
				style={{
					border: "none",
					boxShadow: "11px 14px 19px rgba(0, 0, 0, 0.2)",
					marginTop:"20px"
				}}
			>
				<CardImg top width="100%" src={item.imgUrl} alt="Modern Armchair" />
				<CardBody>
					<CardTitle
						style={{
							fontSize: "1.1rem",
							color: "#0a1d37",
							fontWeight: "600",
							marginTop: "15px",
						}}
						tag="h3"
						className="product__name mb-2"
					>
						<Link to={`/shop/${item.id}`}>{item.productName}</Link>
					</CardTitle>
					<CardSubtitle
						style={{ fontSize: "0.9rem" }}
						tag="span"
						className="text-center"
					>
						{item.category}
					</CardSubtitle>
					<div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
						<span className="price">${item.price}</span>
						<motion.span whileTap={{ scale: 1.2 }}>
							<i className="ri-add-line"></i>
						</motion.span>
					</div>
				</CardBody>
			</Card>
		</Col>
	);
};

export default ProductCard;
