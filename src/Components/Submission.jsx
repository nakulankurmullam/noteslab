import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Submission.css";
import ListGroup from "react-bootstrap/ListGroup";
import WorkListModal from "./SubComponents/WorkListModal";

function WorkList() {
  const [showModal, setModal] = useState(false);
  const [heading, setHeading] = useState("Heading Num:");
  const handleClick = (v) => {
    setHeading(`Heading Num: ${v}`);
    setModal(true);
  };
  return (
    <>
      <ListGroup className="mb-3 ">
        <ListGroup.Item
          onClick={() => {
            handleClick(1);
          }}
        >
          Assignment by Teacher
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => {
            handleClick(2);
          }}
        >
          Assignment by Teacher
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => {
            handleClick(3);
          }}
        >
          Assignment by Teacher
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => {
            handleClick(4);
          }}
        >
          Assignment by Teacher
        </ListGroup.Item>
        <ListGroup.Item
          onClick={() => {
            handleClick(5);
          }}
        >
          Assignment by Teacher
        </ListGroup.Item>
      </ListGroup>
      <WorkListModal
        show={showModal}
        onHide={() => {
          setModal(false);
        }}
        heading={heading}
      />
    </>
  );
}
//main
function Submission() {
  const [showWork, setShowWork] = useState(false);
  return (
    <div>
      <h2>Work Submission</h2>
      <Form>
        <Form.Group>
          <Form.Select className="mb-3" size="lg">
            <option value="">Select Class</option>
            <option value="1">ee</option>
            <option value="1">cs</option>
            <option value="1">ec</option>
          </Form.Select>
          <Button
            onClick={() => setShowWork(true)}
            variant="outline-warning"
            className="mb-3"
          >
            List Assigned Works
          </Button>
        </Form.Group>
        {showWork && <WorkList />}
      </Form>
    </div>
  );
}

export default Submission;
