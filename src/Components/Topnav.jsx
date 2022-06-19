import React from "react";
import "./Topnav.css";
import Profile from "./SubComponents/Profile";
import Search from "./SubComponents/Search";
import { useUsrGen } from "../Context/userGenContext";

function Topnav() {
  const { usrType } = useUsrGen();
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
          <button id="join-create">{usrType === "student"?"join":"create"} new class</button>
        </div>
      </nav>
    </>
  );
}

export default Topnav;
