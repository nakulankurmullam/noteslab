import React from "react";
import "./Settings.css";
import NFTmonke from "../Assets/NFTmonke.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

function Settings({ isStudent }) {
  const nav = useNavigate();
  return (
    <div className="sett_cont">
      <div id="sett_pro_pic">
        <Image size="sm" src={NFTmonke} roundedCircle fluid />
        username
      </div>
      <Form>
        <Form.Group className="m-3">
          <Form.Label>Change Profile Picture:</Form.Label>
          <Form.Control type="file"></Form.Control>
        </Form.Group>
        <Form.Group className="m-3 ">
          <Form.Label>User Name: </Form.Label>
          <Form.Control size="lg" type="text"></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Department:</Form.Label>
          <Form.Select size="lg">
            <option value="">Select Department</option>
            <option value="">EE</option>
            <option value="">EC</option>
          </Form.Select>
        </Form.Group>
        {isStudent && (
          <>
            <Form.Group className="m-3">
              <Form.Label>Semester: </Form.Label>
              <Form.Select size="lg">
                <option value="">Select Semester</option>
                <option value="">EEE</option>
                <option value="">EEE</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label>Register Number:</Form.Label>
              <Form.Control size="lg" type="text"></Form.Control>
            </Form.Group>
          </>
        )}
        <div id="sett_foot" className="m-3">
          <Button type="submit" variant="outline-warning">
            Save Changes
          </Button>
          <Button
            onClick={() => {
              nav(-1);
            }}
            variant="outline-secondary"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              let yes = confirm("Are you sure you want to Logout");
            }}
          >
            LogOut
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Settings;
