import React, { useEffect } from "react";
import "./Profile.css";
import { useUserAuth } from "../../Context/userAuthContext";
import { useUsrGen } from "../../Context/userGenContext";
import { useUserDetail } from "../../Context/userDBContext";

export default function Profile() {
  const { profilePic, setClassList } = useUsrGen();
  const { user } = useUserAuth();
  const { getClassList } = useUserDetail();
  useEffect(() => {
    async function list() {
      const list = await getClassList();
      console.log(list);
      setClassList(list);
    }
    list();
  }, [user]);
  return (
    <div id="prof-flex">
      <div className="prof-wrap">
        <img src={user?.photoURL || profilePic} id="prof-image"></img>
      </div>
      <div id="u-name">{user.displayName}</div>
    </div>
  );
}
