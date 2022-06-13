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
          <Stack id="right-inner-stack">
            <Button className="inr-stack-btn" variant="secondary">Student Login</Button>
            <Button className="inr-stack-btn" variant="secondary">Faculty Login</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
