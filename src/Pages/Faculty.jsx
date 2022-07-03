import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Topnav from "../Components/Topnav";
import Scroller from "../Components/Scroller";
import Selections from "../Components/Selections";
import UploadMaterial from "../Components/UploadMaterial";
import TestScore from "../Components/TestScore";
import PostWork from "../Components/PostWork";
import { useUsrGen } from "../Context/userGenContext";

const retView = (val) => {
  let comp = <Scroller />;
  if (val === "pbs") return <TestScore />;
  if (val === "upm") return <UploadMaterial />;
  if (val === "pnw") return <PostWork />;
  return comp;
};

function Faculty() {
  const { classList } = useUsrGen();
  const [onView, setOnView] = useState("scroll");
  return (
    <>
      <Container>
        <Row>
          <Topnav mode="faculty" />
        </Row>
        <Row>
          <Col>{retView(onView)}</Col>
          <Col>
            {classList ? (
              <Selections mode="faculty" setOnView={setOnView} />
            ) : (
              "loading"
            )} 
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Faculty;
