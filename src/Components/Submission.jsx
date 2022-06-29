import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Submission.css";
import { useUsrGen } from "../Context/userGenContext";
import WorkList from "./SubComponents/WorkList";

function Submission() {
  const [showWork, setShowWork] = useState(false);
  const [selClass, setClass] = useState();
  const { classList } = useUsrGen();

  let classes = classList.map((yourClasses) => yourClasses.title);
  classes.unshift("select");

  const listWork = () => {
    const [ret] = classList.filter((el) => el.title === selClass);
    let works = Boolean(ret?.works.length) ? ret.works : null;
    setShowWork(works);
  };

  return (
    <div>
      <h2>Work Submission</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Select Class: </Form.Label>
          <Form.Select
            className="mb-3"
            onChange={(e) => {
              setClass(e.target.value);
            }}
          >
            {classes.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Form.Select>
          <Button onClick={listWork} variant="outline-warning" className="mb-3">
            List Assigned Works
          </Button>
        </Form.Group>
        {showWork && <WorkList list={showWork} />}
      </Form>
    </div>
  );
}

export default Submission;
