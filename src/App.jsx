import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faculty from "./Pages/Faculty";
import Landing from "./Pages/Landing";
import Student from "./Pages/Student";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </>)
}

export default App;
