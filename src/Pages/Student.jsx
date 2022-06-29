import React, { useState } from "react";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import { useUsrGen } from "../Context/userGenContext";
import Topnav from "../Components/Topnav";
import Scroller from "../Components/Scroller";
import Selections from "../Components/Selections";
import Submission from "../Components/Submission";
import ViewMark from "../Components/ViewMark";
import Calc from "../Components/Calc";

const retView = (val) => {
  let comp = <Scroller />;
  if (val === "gpa") return <Calc />;
  if (val === "wsb") return <Submission />;
  if (val === "vim") return <ViewMark />;
  return comp;
};

function Student() {
  const [onView, setOnView] = useState("");
  const {classList} = useUsrGen();
  return (
    <>
      <Container>
        <Row>
          <Topnav mode="student" />
        </Row>
        <Row>
          <Col>{retView(onView)}</Col>
          <Col>
            {classList?(<Selections mode="student" setOnView={setOnView} />):("...loading")}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Student;
