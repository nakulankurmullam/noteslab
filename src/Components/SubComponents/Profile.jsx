import React from "react";
import "./Profile.css";
import { useUserAuth } from "../../Context/userAuthContext";
import { useUsrGen } from "../../Context/userGenContext";

export default function Profile() {
  const { profileURL } = useUsrGen();
  const PRO_PIC_STYLE = {
    backgroundImage: `url(${profileURL})`,
  };
  const { user } = useUserAuth();
  return (
    <div id="prof-flex">
      <div className="prof-wrap">
        <img src={profileURL} id="prof-image"></img>
      </div>
      <div id="u-name">{user.displayName}</div>
    </div>
  );
}
