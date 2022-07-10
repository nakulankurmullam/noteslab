import React, { useState } from "react";
import "./CreateClass.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useUserDetail } from "../../Context/userDBContext";
import { v4 as uuidv4 } from "uuid";

function CreateClass(props) {
  const { addClass } = useUserDetail();
  const [code, setCode] = useState(null);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tmp = `${uuidv4()}`.split("-")[0];
    if(!title) return;
    try{
      await addClass(tmp,title);
    }catch(err){
      console.error(err);
    }
    setCode(tmp)
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
            Create New Class Room
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Enter Class Name:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                type="text"
                placeholder="eg:Control System EEE B"
                required
              ></Form.Control>
            </Form.Group>

            {code && (
              <Alert variant="success">
                Copy this text: {code}
                <CopyToClipboard text={code}>
                  <button className="fa-solid fa-copy"></button>
                </CopyToClipboard>
              </Alert>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button id="class_code_btn" variant="outline-success" type="submit">
              Create Class Code
            </Button>
            <Button id="modal-close" onClick={props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateClass;
