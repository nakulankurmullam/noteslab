import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";
import "./Submission.css";
import { useUsrGen } from "../Context/userGenContext";
import { useUserDetail } from "../Context/userDBContext";

function TestScore() {
  const [list, setList] = useState(false);
  const [selClass, setClass] = useState();
  const [result, setResult] = useState();
  const { classList } = useUsrGen();
  const { getScore } = useUserDetail();

  let classes = classList.map((el) => el.title);
  classes.unshift("select");

  const listWork = () => {
    const [ret] = classList.filter((el) => el.title === selClass);
    let works = Boolean(ret?.works.length) ? ret.works : ["No Works"];
    let tmp = works.filter((work) => work?.type === "test");
    setList(tmp?.length ? tmp : []);
  };

  const handleClick = async (title) => {
    let mark = "No";
    mark = await getScore(title);
    setResult({title, mark});
  };

  return (
    <>
      <h2>View Internal Mark</h2>
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
            List Tests
          </Button>
        </Form.Group>
      </Form>
      {list && (
        <>
          <Alert variant="secondary">Click on any item to view result</Alert>
          <ListGroup className="mb-3 overflow-auto h-25 d-block">
            {list.map((work, i) => (
              <ListGroup.Item
                key={i}
                onClick={() => {
                  handleClick(work.title);
                }}
                disabled={!work}
              >
                {`${work.type} : ${work.title}`}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
      {result && (
        <h6 variant="success">
          You scored {result.mark} marks for {result.title}
        </h6>
      )}
    </>
  );
}

export default TestScore;
