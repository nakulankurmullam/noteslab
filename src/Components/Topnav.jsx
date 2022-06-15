import React from "react";
import "./Topnav.css";
import Profile from "./SubComponents/Profile";
import Search from "./SubComponents/Search";

function Topnav() {
  return (
    <>
      <nav class="topnav">
        <div class="topnav-items" id="profile-info">
          <Profile />
        </div>
        <div class="topnav-items" id="search-btn">
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
