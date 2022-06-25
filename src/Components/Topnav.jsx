import React, { useState } from "react";
import "./Topnav.css";
import Profile from "./SubComponents/Profile";
import Search from "./SubComponents/Search";
import CreateClass from "./SubComponents/CreateClass";
import JoinClass from "./SubComponents/JoinClass";

function Topnav() {
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
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
              setShowJoin(true);
            }}
            id="join-create"
          >
            {"student" === "student" ? "join" : "create"} new class
          </button>
          <CreateClass
            show={showCreate}
            onHide={() => {
              setShowCreate(false);
            }}
          />
          <JoinClass show={showJoin} onHide={() => {setShowJoin(false);}}/>
        </div>
      </nav>
    </>
  );
}

export default Topnav;
