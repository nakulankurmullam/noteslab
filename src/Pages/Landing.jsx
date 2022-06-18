import React from "react";
import {useNavigate} from 'react-router';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="library"></div>
        </Col>
        <Col id="right-side">
          <div id="right-inner-stack">
            <h1>Notes Lab <i className="fa-solid fa-flask"></i> </h1>
            <button onClick={() => navigate('/student-login')}className="inr-stack-btn" >Student Login</button>
            <button onClick={() => navigate('/faculty-login')}className="inr-stack-btn" >Faculty Login</button>
            <span id="signup-link">Do not have an account? <Link to="/signup">Sign Up</Link> instead</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
