import React from "react";
import { useNavigate } from "react-router";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./Landing.css";
import { useUsrGen } from "../Context/userGenContext";

function Landing() {
  const navigate = useNavigate();
  const { setUserType } = useUsrGen();
  const handleStudentLogin = (e) => {
    setUserType("student");
    navigate("/student-login");
  };
  const handleFacultyLogin = (e) => {
    setUserType("faculty");
    navigate("/faculty-login");
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="library"></div>
        </Col>
        <Col id="right-side">
          <div id="right-inner-stack">
            <h1>
              Notes Lab <i className="fa-solid fa-flask"></i>{" "}
            </h1>
            <button onClick={handleStudentLogin} className="inr-stack-btn">
              Student Login
            </button>
            <button onClick={handleFacultyLogin} className="inr-stack-btn">
              Faculty Login
            </button>
            <span id="signup-link">
              Do not have an account? <Link to="/signup">Sign Up</Link> instead
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
