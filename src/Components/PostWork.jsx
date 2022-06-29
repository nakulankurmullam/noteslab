import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./PostWork.css";
import { useUsrGen } from "../Context/userGenContext";

function PostWork() {
  const { classList, postNewWork } = useUsrGen();
  let classes = classList.map((yourClasses) => yourClasses.title);
  classes.unshift("select");

  const [fileName, setFileName] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState();
  const [file, setFile] = useState();
  const [selectedClass, setClass] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log(selectedClass);
    e.preventDefault();
    setLoading(true);
    await postNewWork(fileName, selectedClass, type, date, file);
    setLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id="post_wrk_cont">
        {loading && <Alert variant="warning">uploading...</Alert>}
        <Form.Group className="mb-4">
          <Form.Label>Work Title: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setFileName(e.target.value);
            }}
            size="lg"
            type="text"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Choose File:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            size="lg"
            type="file"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Select Class</Form.Label>
          <Form.Select
            onChange={(e) => {
              setClass(e.target.value);
            }}
            size="lg"
          >
            {classes.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Select Type:</Form.Label>
          <Form.Select
            onChange={(e) => {
              setType(e.target.value);
            }}
            size="lg"
          >
            <option value="" disabled>
              select
            </option>
            <option value="test">Test</option>
            <option value="assignment">Assignment</option>
            <option value="misc">Others</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Due Date: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setDate(e.target.value);
            }}
            size="lg"
            type="date"
            required
          ></Form.Control>
        </Form.Group>
        <Button size="lg" id="pst-wrk-btn" type="submit">
          Upload <i className="fa-solid fa-upload"></i>
        </Button>
      </Form>
    </>
  );
}

export default PostWork;
