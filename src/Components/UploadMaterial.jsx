import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./UploadMaterial.css";
import { useUsrGen } from "../Context/userGenContext";

function UploadMaterial() {
  const { classList, uploadMaterial } = useUsrGen();
  let classes = classList.map((yourClasses) => yourClasses.title);
  classes.unshift("select")

  const [fileName, setFileName] = useState();
  const [file, setFile] = useState();
  const [selectedClass, setClass] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log(selectedClass)
    e.preventDefault();
    setLoading(true);
    await uploadMaterial(fileName, selectedClass, file);
    setLoading(false);
  };
  return (
    <div className="up_mat_cont">
      <h3 className="mb-4">Upload Material</h3>
      {loading && <Alert variant="warning">Loading...</Alert>}
      <Form onSubmit={handleSubmit} id="up_mat_form">
        <Form.Group className="mb-5">
          <Form.Label>Name of Material</Form.Label>
          <Form.Control
            size="lg"
            placeholder="eg: control system mod 1"
            onChange={(e) => {
              setFileName(e.target.value);
            }}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-5">
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
        <Button size="lg" id="up_mat_btn" type="submit">
          Upload <i className="fa-solid fa-upload"></i>
        </Button>
      </Form>
    </div>
  );
}

export default UploadMaterial;
