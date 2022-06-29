import React, { useState } from "react";
import "./TestScore.css";
import Button from "react-bootstrap/Button";
import StudentList from "./SubComponents/StudentList";
import Form from "react-bootstrap/Form";
import { useUsrGen } from "../Context/userGenContext";
import { useUserDetail } from "../Context/userDBContext";
import Alert from "react-bootstrap/Alert";

function TestScore() {
  const [selClass, setClass] = useState();
  const [showList, setShowList] = useState(false);
  const [testName, setTestName] = useState([]);
  const [selTest, setSelTest] = useState();

  const { showTest } = useUserDetail();
  const { classList } = useUsrGen();
  let classes = classList.map((yourClasses) => yourClasses.title);
  classes.unshift("select");

  const handleSubmit = (e) => {};
  return (
    <div className="score_up_cont">
      <h2>Publish Test Score</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Select Class:</Form.Label>
          <Form.Select
            onChange={async (e) => {
              let testArr = await showTest(e.target.value);
              console.log(testArr);
              setTestName(["select", ...testArr]);
              setClass(e.target.value);
            }}
          >
            {classes.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {selClass && (
          <Form.Group>
            <Form.Label>select test:</Form.Label>
            <Form.Select
              onChange={(e) => {
                setSelTest(e.target.value);
              }}
              className="mb-3"
            >
              {testName.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        )}
        <Button
          className="mb-3"
          type="button"
          onClick={async () => {
            await gradeTest(selTest);
            setShowList(!showList);
          }}
          variant="outline-warning"
          value=""
          disabled={!selTest}
        >
          Grade
        </Button>

        {showList && (
          <>
            <StudentList />
            <Button type="submit" id="score_upload">
              Upload
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}

export default TestScore;
