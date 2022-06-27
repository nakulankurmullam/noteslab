import React from "react";
import "./Selection.css";
import { useUsrGen } from "../Context/userGenContext";

function Selections({ mode, setOnView }) {
  return mode === "faculty" ? (
    <div id="selections">
      <button onClick={() => {setOnView("pbs")}} className="selection-btns">Publish Score</button>
      <button onClick={() => {setOnView("upm")}} className="selection-btns">Upload Material</button>
      <button onClick={() => {setOnView("pnw")}} className="selection-btns">Post New Work</button>
    </div>
  ) : (
    <div id="selections">
      <button onClick={() => {setOnView("gpa")}} className="selection-btns">Calculate GPA</button>
      <button onClick={() => {setOnView("wsb")}} className="selection-btns">Work Submission</button>
      <button onClick={() => {setOnView("vim")}} className="selection-btns">View Internal Mark</button>
    </div>
  );
}

export default Selections;
