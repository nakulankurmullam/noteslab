import React, { useEffect } from "react";
import "./Profile.css";
import { useUserAuth } from "../../Context/userAuthContext";
import { useUsrGen } from "../../Context/userGenContext";

export default function Profile() {
  const { profilePic } = useUsrGen();
  const { user } = useUserAuth();
  return (
    <div id="prof-flex">
      <div className="prof-wrap">
        <img src={user?.photoURL || profilePic} id="prof-image"></img>
      </div>
      <div id="u-name">{user.displayName}</div>
    </div>
  );
}
