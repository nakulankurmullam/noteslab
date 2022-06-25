import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./UploadMaterial.css"

function UploadMaterial() {
  return (
    <div className="up_mat_cont">
    <Form id="up_mat_form">
      <Form.Group className="mb-5">
        <Form.Label>Name of Material</Form.Label>
        <Form.Control size="lg" placeholder="eg: control system mod 1"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Select size="lg">
          <option value="">Select Class</option>
          <option value="1">Physics</option>
          <option value="2">Mathematics</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label>Choose File:</Form.Label>
        <Form.Control size="lg" type="file"></Form.Control>
      </Form.Group>
      <Button size="lg" id="up_mat_btn" type="submit">Upload <i className="fa-solid fa-upload"></i></Button>
    </Form>
    </div> 
  )
}

export default UploadMaterial