import React from "react";
import "./ScrollCard.css";

function ScrollCard() {
  return (
    <div className="sCard-wrap">
      <div className="sCard-left"><i className="fa-solid fa-book"></i></div>
      <div className="sCard-right">
        <div className="sCard-title">QP: {"<subject code>"}</div>
        <div className="sCard-btn-wrap">
          <button className="dwnld"> <i className="fa-solid fa-download"></i> download</button>
          <button className="view"> <i className="fa-solid fa-eye"></i> view</button>
        </div>
      </div>
    </div>
  );
}

export default ScrollCard;
