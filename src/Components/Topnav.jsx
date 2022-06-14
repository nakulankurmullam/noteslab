import React from "react";
import "./Topnav.css";
import Profile from "./SubComponents/Profile";
import Search from "./SubComponents/Search";

function Topnav() {
  return (
    <>
      <nav class="topnav">
        <div class="topnav-items">
          <Profile />
        </div>
        <div class="topnav-items">
          <Search />
        </div>
        <div class="topnav-items">
          <button id="join-create">create new class</button>
        </div>
      </nav>
    </>
  );
}

export default Topnav;
