import React, { useState } from "react";
import Helmet from "../componentes/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [username, setUsername] = useState("");
	const [file, setFile] = useState(null);

	const handleSubmit = (e) => {
		setEmail("");
		setPassword("");
		e.preventDefault();
	};

	return (
		<Helmet title="Signup">
			<section>
				<Container>
					<Row>
						<Col lg="6" className="m-auto text-center">
							<h3 className="fw-bold fs-4">Signup</h3>
							<Form className="auth__form">
								<FormGroup className="form__group">
									<input
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										type="text"
										placeholder="Enter your email"
									/>
								</FormGroup>
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
								<FormGroup className="form__group">
									<input
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										type="password"
										placeholder="Enter your password"
									/>
								</FormGroup>

								<FormGroup className="form__group">
									<label>Add your profile picture</label>
									<input
										type="file"
										onChange={(e) => setFile(e.target.files[0])}
									/>
								</FormGroup>
								<div>
									<button
										type="submit"
										onClick={handleSubmit}
										className="buy__btn auth__btn"
									>
										Create an Account
									</button>
									<p>
										already have account? <Link to="login">login</Link>
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

export default Signup;
