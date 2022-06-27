import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Topnav.css";
import Profile from "./SubComponents/Profile";
import Search from "./SubComponents/Search";
import CreateClass from "./SubComponents/CreateClass";
import JoinClass from "./SubComponents/JoinClass";

function Topnav({mode}) {
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <nav className="topnav">
        <div
          onClick={() => nav("/settings")}
          className="topnav-items"
          id="profile-info"
        >
          <Profile />
        </div>
        <div className="topnav-items" id="search-btn">
          <Search />
        </div>
        <div className="topnav-items">
          <button
            onClick={() => {
              if(mode === "faculty")
              setShowCreate(true);
              else
              setShowJoin(true);
            }}
            id="join-create"
          >
            {mode === "student" ? "join" : "create"} new class
          </button>
          <CreateClass
            show={showCreate}
            onHide={() => {
              setShowCreate(false);
            }}
          />
          <JoinClass
            show={showJoin}
            onHide={() => {
              setShowJoin(false);
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Topnav;
