import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./UploadMaterial.css"

function UploadMaterial() {
  return (
    <>
    <Form>
      <Form.Group>
        <Form.Label>Name of Material</Form.Label>
        <Form.Control placeholder="eg: control system mod 1"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Select>
          <option value="">Select Class</option>
          <option value="1">Physics</option>
          <option value="2">Mathematics</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Choose File:</Form.Label>
        <Form.Control type="file"></Form.Control>
      </Form.Group>
      <Button id="up_mat_btn" type="submit">Upload <i className="fa-solid fa-upload"></i></Button>
    </Form>
    </> 
  )
}

export default UploadMaterial