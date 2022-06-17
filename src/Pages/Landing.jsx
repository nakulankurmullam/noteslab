import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Landing.css";

function Landing() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="library"></div>
        </Col>
        <Col id="right-side">
          <div id="right-inner-stack">
            <h1>Notes Lab</h1>
            <button className="inr-stack-btn" variant="secondary">Student Login</button>
            <button className="inr-stack-btn" variant="secondary">Faculty Login</button>
            <span id="signup-link">Do not have an account? <a href="#">Sign Up</a> instead</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
