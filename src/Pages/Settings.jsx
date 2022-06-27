import React, { useState } from "react";
import "./Settings.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/userAuthContext";
import { useUsrGen } from "../Context/userGenContext";

function Settings({ isStudent }) {
  const { profileURL, uploadProfilePic } = useUsrGen();
  const { user, uploadUserName, logOut } = useUserAuth();
  const [u_name, setUserName] = useState(user.displayName);
  const [file, setFile] = useState();
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadUserName(u_name);
      if (file) uploadProfilePic(file);
    } catch (err) {
      console.error(err);
    }
  };
  const handleLogOut = async (e) => {
    if (confirm("Are you sure you want to log out ?")) logOut();
  };
  return (
    <div className="sett_cont">
      <div id="sett_pro_pic">
        <Image size="sm" src={profileURL} roundedCircle fluid />
        {u_name}
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3">
          <Form.Label>Change Profile Picture:</Form.Label>
          <Form.Control
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            type="file"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3 ">
          <Form.Label>User Name: </Form.Label>
          <Form.Control
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            size="lg"
            type="text"
          ></Form.Control>
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
            Back
          </Button>
          <Button variant="danger" onClick={handleLogOut}>
            LogOut
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Settings;
