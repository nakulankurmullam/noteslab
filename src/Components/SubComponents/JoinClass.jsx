import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./JoinClass.css";

function JoinClass(props) {
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
            <Form.Group>
              <Form.Label>Enter Class Code</Form.Label>
              <Form.Control type="text" size="lg" placeholder="paste here"></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              id="join_submit"
              onClick={(e) => {
                e.preventDefault();
              }}
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
