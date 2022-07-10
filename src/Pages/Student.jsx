import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
  const { classList } = useUsrGen();
  return (
    <>
      <Container>
        <Row>
          <Topnav mode="student" />
        </Row>
        <Row>
          <Row>
            <Col>
              <Button
                className="rounded-circle mb-3"
                variant="outline-warning"
                onClick={() => {
                  setOnView("scroll");
                }}
                size="sm"
              >
                <i className="fa-solid fa-home"></i>
              </Button>
            </Col>
            <Col></Col>
          </Row>
          {onView === "scroll" && (
            <Col>
              <Scroller setOnView={setOnView} />
            </Col>
          )}
          {onView !== "scroll" && <Col>{retView(onView)}</Col>}
          <Col>
            {classList ? (
              <Selections mode="student" setOnView={setOnView} />
            ) : (
              "...loading"
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Student;
