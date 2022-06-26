import React from "react";
import "./Profile.css";
import { useUserAuth } from "../../Context/userAuthContext";

export default function Profile() {
  const { user } = useUserAuth();
  return (
    <div id="prof-flex">
      <div className="prof-wrap">
        <div id="prof-image"></div>
      </div>
      <div id="u-name">{user.displayName}</div>
    </div>
  );
}
