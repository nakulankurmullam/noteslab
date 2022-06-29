import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function WorkListModal({ heading, due, onHide, show }) {
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <Alert variant="warning">Due date: {due}</Alert>
          <Form.Group>
            <Form.Label>Choose file:</Form.Label>
            <Form.Control size="lg" type="file"></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button id="wrk_submit_btn" type="submit">
            Upload <i className="fa-solid fa-upload"></i>
          </Button>
          <Button variant="outline-secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WorkListModal;
