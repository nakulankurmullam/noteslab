import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faculty from "./Pages/Faculty";
import Landing from "./Pages/Landing";
import Student from "./Pages/Student";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/student-login" element={<Login />} />
          <Route path="/faculty-login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </>)
}

export default App;
