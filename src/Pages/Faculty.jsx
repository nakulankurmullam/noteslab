import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
              <Selections mode="faculty" setOnView={setOnView} />
            ) : (
              <i
                style={{ color: "white" }}
                className="fa-solid fa-circle-notch fa-spin"
              ></i>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Faculty;
