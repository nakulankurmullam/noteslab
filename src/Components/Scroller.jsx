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
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
        <ScrollCard className="mt-3 mb-3"/>
      </div>
    </div>
  );
}

export default Scroller;
