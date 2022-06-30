import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useUsrGen } from "../../Context/userGenContext";

function WorkListModal({ heading, due, onHide, show }) {
  const { submitWork } = useUsrGen();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitWork(heading, file);
    setLoading(false);
    alert("successfully uploaded");
  };
  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {heading}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {loading && <Alert variant="danger">...uploading</Alert>}
            <Alert variant="warning">Due date: {due}</Alert>
            <Form.Group>
              <Form.Label>Choose file:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                size="lg"
                type="file"
              ></Form.Control>
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
        </Form>
      </Modal>
    </div>
  );
}

export default WorkListModal;
