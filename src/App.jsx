import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faculty from "./Pages/Faculty";
import Landing from "./Pages/Landing";
import Student from "./Pages/Student";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { UserAuthContextProvider } from "./Context/userAuthContext";

function App() {
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/student-login" element={<Login />} />
            <Route path="/faculty-login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
