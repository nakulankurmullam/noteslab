import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function CalcCGPA() {
  const [showList, setShowList] = useState([]);
  const [marksArr, setMarks] = useState(new Array(showList.length));
  const [creditArr, setCredits] = useState(new Array(showList.length));
  const [result, setResult] = useState();

  const createList = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(
        <ListGroup.Item
          key={i}
          className="d-inline-flex flex-column align-items-center"
        >
          <p>Subject{i + 1}:</p>
          <Form.Group>
            <Form.Label>Mark:</Form.Label>
            <Form.Control
              onChange={(e) => {
                marksArr[i] = Number(e.target.value);
                setMarks(marksArr);
              }}
              type="number"
            ></Form.Control>
            <Form.Label>Credit:</Form.Label>
            <Form.Control
              onChange={(e) => {
                creditArr[i] = Number(e.target.value);
                setCredits(creditArr);
              }}
              type="number"
            ></Form.Control>
          </Form.Group>
        </ListGroup.Item>
      );
    }
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creditArr);
    console.log(marksArr);
    if (creditArr.includes(undefined) || marksArr.includes(undefined)) {
      alert("enter credits and marks of all subjects");
      return;
    }
    let productSum = 0,
      creditSum = 0;
    for (let j = 0; j < creditArr.length; j++) {
      creditSum += creditArr[j];
      productSum += creditArr[j] * marksArr[j];
    }
    console.log(productSum / creditSum);
    setResult(productSum / creditSum);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-inline-flex justify-content-evenly m-3">
          <Form.Label>Select the number of subjects (all sem ):</Form.Label>
          <Form.Control
            className="w-25"
            onChange={(e) => {
              setShowList(createList(e.target.value));
              setMarks(new Array(Number(e.target.value)));
              setCredits(new Array(Number(e.target.value)));
            }}
            type="number"
          ></Form.Control>
        </Form.Group>
        {!!showList.length && (
          <ListGroup style={{ maxHeight: "50vh" }} className="overflow-auto">
            {showList.map((el) => el)}
          </ListGroup>
        )}
        {!!showList.length && (
          <Button variant="outline-warning" className="mt-3 mb-3" type="submit">
            Calculate
          </Button>
        )}
      </Form>
      {!!result && <h4 variant="info">CGPA: {result}</h4>}
    </>
  );
}
