import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function ViewMark() {
  const [show, setShow] = useState(true);
  const [viewMark, setViewMark] = useState(false);
  return (
    <div>
      <Form>
        <Modal show={show} centered>
          <Modal.Header closeButton>
            <Modal.Title>View Internal Mark</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Select size="lg">
                <option value="">Select Class</option>
                <option value="">LCS</option>
                <option value="">RSE</option>
                <option value="">CST</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Select size="lg">
                <option value="">select work</option>
                <option value="">1 work</option>
                <option value="">2 work</option>
                <option value="">3 work</option>
              </Form.Select>
            </Form.Group>
            {viewMark && <Alert variant="dark">your score is: 45 / 50</Alert>}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                setViewMark(true);
              }}
              variant="outline-success"
              type="submit"
            >
              View
            </Button>
            <Button
              onClick={() => {
                setShow(false);
              }}
              variant="outline-secondary"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
}

export default ViewMark;
