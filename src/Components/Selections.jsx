import React from "react";
import "./Selection.css";
import { useUsrGen } from "../Context/userGenContext";

function Selections() {
  const { usrType } = useUsrGen();
  const isStudent = "student" === "student";
  return (
    <div id="selections">
      <button className="selection-btns">
        {isStudent ? "Calculate GPA" : "Upload Material"}
      </button>
      <button className="selection-btns">
        {isStudent ? "Work Submission" : "Post New Work"}
      </button>
      <button className="selection-btns">
        {isStudent ? "View Internal Mark" : "Publish Score"}
      </button>
    </div>
  );
}

export default Selections;
