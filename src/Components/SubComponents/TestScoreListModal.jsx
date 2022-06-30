import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

const TEMP_STUDENTS = [
  "Floch",
  "Miakasa",
  "Eren",
  "Armin",
  "Connie",
  "Sasha",
  "Jean",
  "Floch",
  "Miakasa",
  "Eren",
  "Armin",
  "Connie",
  "Sasha",
  "Jean",
];

function TestScoreListModal({ submitted, onHide, show }) {
  const [gradeList, setGradeList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(gradeList);
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Submitted Students
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <ListGroup className="d-inline-block h-50 w-75">
              {TEMP_STUDENTS.map((student) => (
                <ListGroup.Item>
                  {student}
                  <InputGroup>
                    <Form.Control
                      onChange={(e) => {
                        setGradeList([e.target.value, ...gradeList]);
                      }}
                      type="number"
                    />
                    <Button variant="outline-secondary">Fix Grade</Button>
                  </InputGroup>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form>
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

export default TestScoreListModal;
