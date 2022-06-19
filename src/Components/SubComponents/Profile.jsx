import React from "react";
import "./Profile.css";
import { useUsrGen } from "../../Context/userGenContext";

export default function Profile() {
  const { usrType } = useUsrGen();
  return (
    <div id="prof-flex">
      <div className="prof-wrap">
        <div id="prof-image"></div>
      </div>
      <div id="u-name">{usrType}</div>
    </div>
  );
}
