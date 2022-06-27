import React, { useState } from "react";
import "./TestScore.css";
import Button from "react-bootstrap/Button";
import StudentList from "./SubComponents/StudentList";
import Form from "react-bootstrap/Form";

function TestScore() {
  const [showList, setShowList] = useState(false);
  const handleSubmit = (e) => {};
  return (
    <div className="score_up_cont">
      <h2>Publish Test Score</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Select className="mb-3">
            <option value="">Select Test</option>
            <option value="">Internal 1</option>
            <option value="">Internal 2</option>
          </Form.Select>
          <Button className="mb-3"
            type="button"
            onClick={() => {
              setShowList(!showList);
            }}
            variant="outline-warning"
            value=""
          >
            Grade
          </Button>
        </Form.Group>
        {showList && <StudentList />}
        {showList && <Button type="submit" id="score_upload">Upload</Button>}
      </Form>
    </div>
  );
}

export default TestScore;
