import React from "react";
import "./Scroller.css";
import ScrollCard from "./SubComponents/ScrollCard";

function Scroller() {
  return (
    <div className="scroll-main">
      <div>
        <i className="fa-solid fa-history"></i> Recent Activities
      </div>
      <div className="scroll-wrap">
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </div>
    </div>
  );
}

export default Scroller;
