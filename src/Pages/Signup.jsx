import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/userAuthContext";
import { useUserDetail } from "../Context/userDBContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [regNum, setRegNum] = useState("");
  const [dept, setDept] = useState("");
  const [isStudent, setIsStudent] = useState(true);
  const [sem, setSem] = useState("");
  const navigate = useNavigate();
  const { signUp, uploadUserName } = useUserAuth();
  const { addFaculty, addStudent } = useUserDetail();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isStudent) {
      if (!dept || !userName) {
        if (!regNum || !sem) {
          alert("Make sure to fill the form");
          return;
        }
      }
    } else {
      if (!dept || !userName) {
        alert("Make sure to fill the form");
        return;
      }
    }
    setError("");
    try {
      await signUp(email, password);
      await uploadUserName(userName);
      if (isStudent) {
        await addStudent(userName, regNum, dept, sem);
      } else {
        await addFaculty(userName, userName);
      }
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className=" box signup-container">
        <h2 className="mb-3">
          Join Notes Lab <i className="fa-solid fa-flask"></i>
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              required="required"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="signup-type mb-3">
            <input
              type="radio"
              name="reg-type"
              value="faculty"
              id="fcltyType"
              checked={!isStudent}
              onChange={(e) => {
                console.log("yeah ");
                setIsStudent(!isStudent);
              }}
            />
            <label htmlFor="fcltyType">Faculty</label>
            <input
              type="radio"
              name="reg-type"
              value="student"
              id="stdntType"
              checked={isStudent}
              onChange={(e) => {
                console.log("not yeah");
                setIsStudent(!isStudent);
              }}
            />
            <label htmlFor="stdntType">Student</label>
          </div>

          {isStudent && (
            <div className="stdnt-detail">
              <Form.Select
                onChange={(e) => setDept(e.target.value)}
                className="mb-3"
              >
                <option>Choose Department</option>
                <option value="CSE">CSE</option>
                <option value="CE">CE</option>
                <option value="ME">ME</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
              </Form.Select>
              <Form.Select
                onChange={(e) => setSem(e.target.value)}
                className="mb-3"
              >
                <option>Choose Semester</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicReg">
                <Form.Control
                  type="text"
                  placeholder="Register Number"
                  onChange={(e) => setRegNum(e.target.value)}
                  required="required"
                />
              </Form.Group>
            </div>
          )}
          {!isStudent && (
            <div className="stdnt-detail">
              <Form.Select
                onChange={(e) => setDept(e.target.value)}
                className="mb-3"
              >
                <option>Choose Department</option>
                <option value="CSE">CSE</option>
                <option value="CE">CE</option>
                <option value="ME">ME</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
              </Form.Select>
            </div>
          )}

          <div className="d-grid ">
            <Button variant="primary" id="signup-btn" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
