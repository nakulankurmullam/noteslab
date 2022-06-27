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
import Settings from "./Pages/Settings";

function App() {
  return (
    <>
      <Router>
        <UserAuthContextProvider>
          <UserGenContextProvider>
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
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <Settings isStudent={true} />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </UserDetailsContextProvider>
          </UserGenContextProvider>
        </UserAuthContextProvider>
      </Router>
    </>
  );
}

export default App;
