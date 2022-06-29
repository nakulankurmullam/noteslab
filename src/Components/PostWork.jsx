import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PostWork.css";

function PostWork() {
  return (
    <>
      <Form id="post_wrk_cont">
        <Form.Group className="mb-4">
          <Form.Label>Work Title: </Form.Label>
          <Form.Control size="lg" type="text" required></Form.Control>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Select Class:</Form.Label>
          <Form.Select size="lg">
            <option value="" disabled>select</option> 
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Select Type:</Form.Label>
          <Form.Select size="lg">
            <option value="" disabled>select</option> 
            <option value="test">Test</option> 
            <option value="assignment">Assignment</option> 
            <option value="misc">Others</option> 
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Due Date: </Form.Label>
          <Form.Control size="lg" type="date" required></Form.Control>
        </Form.Group>
        <Button size="lg" id="pst-wrk-btn" type="submit">
          Upload <i className="fa-solid fa-upload"></i>
        </Button>
      </Form>
    </>
  );
}

export default PostWork;
