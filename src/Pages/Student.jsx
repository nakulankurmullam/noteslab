import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Topnav from "../Components/Topnav";
import Scroller from "../Components/Scroller";
import Selections from "../Components/Selections";
import Submission from "../Components/Submission";

function Student() {
  return (
    <>
      <Container>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col>
            {/* <Scroller /> */}
            <Submission/>
          </Col>
          <Col>
            <Selections />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Student;