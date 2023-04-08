import React, { useState } from "react";
import Helmet from "../componentes/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		setEmail("");
		setPassword("");
		e.preventDefault();
	};

	return (
		<Helmet title="Login">
			<section>
				<Container>
					<Row>
						<Col lg="6" className="m-auto text-center">
							<h3 className="fw-bold fs-4">Login</h3>
							<Form className="auth__form">
								<FormGroup className="form__group">
									<input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										type="Email"
										placeholder="Enter your email"
									/>
								</FormGroup>
								<FormGroup className="form__group">
									<input
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										placeholder="Enter your password"
									/>
								</FormGroup>
								<div>
									<button
										type="submit"
										onClick={handleSubmit}
										className="buy__btn auth__btn"
									>
										Login
									</button>
									<p>
										Don't have an account?{" "}
										<Link to="signup">Create an account</Link>
									</p>
								</div>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Login;
