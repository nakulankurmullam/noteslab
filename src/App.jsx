import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faculty from "./Pages/Faculty";
import Landing from "./Pages/Landing";
import Student from "./Pages/Student";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./Context/userAuthContext";
import { UserDetailsContextProvider } from "./Context/userDBContext";
import { UserGenContextProvider } from "./Context/userGenContext";

function App() {
  return (
    <>
      <Router>
        <UserGenContextProvider>
          <UserAuthContextProvider>
            <UserDetailsContextProvider>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/student-login" element={<Login />} />
                <Route path="/faculty-login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/faculty"
                  element={
                    <ProtectedRoute>
                      <Faculty />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/student"
                  element={
                    <ProtectedRoute>
                      <Student />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </UserDetailsContextProvider>
          </UserAuthContextProvider>
        </UserGenContextProvider>
      </Router>
    </>
  );
}

export default App;
