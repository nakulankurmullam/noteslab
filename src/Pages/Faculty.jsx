import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Topnav from "../Components/Topnav";
import Scroller from "../Components/Scroller";
import Selections from "../Components/Selections";
import UploadMaterial from "../Components/UploadMaterial";

function Faculty() {
  return (
    <>
      <Container>
        <Row>
          <Topnav />
        </Row>
        <Row>
          <Col>
            {/* <Scroller /> */}
            <UploadMaterial />
          </Col>
          <Col>
            <Selections />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Faculty;
