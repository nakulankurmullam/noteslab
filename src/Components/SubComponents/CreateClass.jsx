import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./CreateClass.css";

function CreateClass(props) {
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
            Create New Class Room
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Class Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg:Control System EEE B"
              ></Form.Control>
            </Form.Group>
            <Button id="class_code_btn" type="submit">
              Create Class Code
            </Button>
            <Alert variant="success">
              Copy this text: asfjasjdfajskdfk
              <CopyToClipboard text={"asfjasjdfajskdfk"}>
                <button className="fa-solid fa-copy"></button>
              </CopyToClipboard>
            </Alert>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="modal-close" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateClass;
