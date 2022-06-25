import React, { useState } from "react";
import "./Topnav.css";
import Profile from "./SubComponents/Profile";
import Search from "./SubComponents/Search";
import CreateClass from "./SubComponents/CreateClass";

function Topnav() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className="topnav">
        <div className="topnav-items" id="profile-info">
          <Profile />
        </div>
        <div className="topnav-items" id="search-btn">
          <Search />
        </div>
        <div className="topnav-items">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            id="join-create"
          >
            {"faculty" === "student" ? "join" : "create"} new class
          </button>
          <CreateClass
            show={showModal}
            onHide={() => {
              setShowModal(false);
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Topnav;
