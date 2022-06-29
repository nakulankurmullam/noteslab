import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/userAuthContext";
import { useUsrGen } from "../Context/userGenContext";

const Login = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn } = useUserAuth();
  const { setUserType } = useUsrGen();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      if(pathname === "/student-login"){
        setUserType("student")
        navigate("/student")
      }else{
        setUserType("faculty");
        navigate("/faculty");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="login-container box">
        <h2 className="mb-3">
          Notes Lab {pathname === "/student-login" ? "Student " : "Faculty "}
          Login
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid ">
            <Button id="login-btn" variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
