import React, { useState } from "react";
import "./Settings.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/userAuthContext";
import { useUsrGen } from "../Context/userGenContext";
import { useUserDetail } from "../Context/userDBContext";

function Settings({ isStudent }) {
  const { profilePic, uploadProfilePic } = useUsrGen();
  const { user, uploadUserName, logOut } = useUserAuth();
  const { uploadDetails } = useUserDetail();

  const [u_name, setUserName] = useState(user.displayName);
  const [file, setFile] = useState();
  const [dept, setDept] = useState();
  const [sem, setSem] = useState();
  const [regNo, setRegNo] = useState();

  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadUserName(u_name);
      if (file) uploadProfilePic(file);
    } catch (err) {
      console.error(err);
    }
    try {
      await uploadDetails(dept, sem, regNo);
    } catch (err) {
      console.error(err);
    }
    alert("successfully updated your profile");
  };
  const handleLogOut = async (e) => {
    if (confirm("Are you sure you want to log out ?")) await logOut();
  };
  return (
    <div className="sett_cont">
      <div id="sett_pro_pic">
        <Image
          size="sm"
          src={user?.photoURL || profilePic}
          roundedCircle
          fluid
        />
        {user.displayName}
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
          <Form.Select
            onChange={(e) => {
              setDept(e.target.value);
            }}
            size="lg"
          >
            <option value="">Select Department</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="CSE">CSE</option>
          </Form.Select>
        </Form.Group>
        {isStudent && (
          <>
            <Form.Group className="m-3">
              <Form.Label>Semester: </Form.Label>
              <Form.Select
                onChange={(e) => {
                  setSem(e.target.value);
                }}
                size="lg"
              >
                <option value="">Select Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label>Register Number:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegNo(e.target.value);
                }}
                size="lg"
                type="text"
              ></Form.Control>
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
