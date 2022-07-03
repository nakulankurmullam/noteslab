import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import { useUserDetail } from "../../Context/userDBContext";

function TestScoreListModal({ submittedArr, title, onHide, show }) {
  const { gradeStudents } = useUserDetail();
  const submittedArrNames = submittedArr?.map((el) => el.name);
  let [gradeList, setGradeList] = useState(new Array(submittedArr.length));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(submittedArr);
    if (!gradeList.length) {
      alert("No grades were confirmed");
      return;
    }
    await gradeStudents(gradeList, title);
    alert("Succesfully updated marks of students");
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Submitted Students
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup className="d-inline-block h-50 w-75">
              {submittedArr &&
                submittedArrNames.map((student, i) => (
                  <ListGroup.Item key={i}>
                    {student}
                    <InputGroup>
                      <Form.Control
                        id={`stdnt-lst-itm-${i}`}
                        defaultValue={0}
                        type="number"
                      />
                      <Button
                        onClick={(e) => {
                          let inp = document.querySelector(
                            `#stdnt-lst-itm-${i}`
                          );
                          // let gradeListElm = submittedArr[i];
                          submittedArr[i].mark = inp.value;
                          gradeList = [...submittedArr];
                          // gradeListElm.mark = inp.value;
                          // gradeList[i] = gradeListElm;
                          console.log(gradeList);
                          setGradeList(gradeList);
                        }}
                        variant="outline-secondary"
                      >
                        Confirm
                      </Button>
                      <Button variant="outline-secondary" disabled>
                        View Answer
                      </Button>
                    </InputGroup>
                  </ListGroup.Item>
                ))}
              {!submittedArr && (
                <ListGroup.Item>
                  <Alert variant="danger">No students have submittedArr</Alert>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button id="wrk_submit_btn" type="submit" disabled={!submittedArr}>
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

export default TestScoreListModal;
