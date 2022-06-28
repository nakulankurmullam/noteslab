import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import "./JoinClass.css";
import { useUserDetail } from "../../Context/userDBContext";

function JoinClass(props) {
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const { joinClass } = useUserDetail();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) return;
    joinClass(code);
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Join New Class
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {error && <Alert variant="danger">invalid class code</Alert>}
            <Form.Group>
              <Form.Label>Enter Class Code</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                type="text"
                size="lg"
                placeholder="paste here"
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              id="join_submit"
              onClick={handleSubmit}
              type="submit"
              variant="outline-success"
            >
              Submit
            </Button>
            <Button id="join_close" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default JoinClass;
