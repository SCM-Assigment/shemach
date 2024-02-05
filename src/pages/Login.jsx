import React, { useState } from "react";
import Helmet from "../componentes/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { auth } from "../firebase.config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Define the Login component
const Login = () => {
  // Define state variables using the useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Get the navigate function from the react-router-dom package
  const navigate = useNavigate();

  // Define the signIn function
  const signIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading to true while the sign-in process is in progress

    try {
      // Attempt to sign in with email and password using Firebase authentication
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful"); // Display a success message using the react-toastify package
      navigate("/"); // Navigate to the home page after successful login
      setLoading(false); // Set loading to false after the sign-in process is complete
    } catch (error) {
      setLoading(false); // Set loading to false in case of an error
      toast.error(error.message); // Display an error message using the react-toastify package
    }
  };

  // Return the JSX for the Login component
  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? ( // Display a spinner if loading is true, otherwise display the login form
              <div className="spinner-container d-flex justify-content-center">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold fs-4">Login</h3>
                <Form className="auth__form" onSubmit={signIn}>
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
                    <button type="submit" className="buy__btn auth__btn">
                      Login
                    </button>
                    <p>
                      Don't have an account?{" "}
                      <Link to="/signup">Create an account</Link>
                    </p>
                  </div>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
