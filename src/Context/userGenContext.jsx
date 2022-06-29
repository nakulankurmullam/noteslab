import React, { useContext, useState, createContext } from "react";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { useUserAuth } from "./userAuthContext";
import { updateProfile } from "firebase/auth";

const userGenContext = createContext();

export function UserGenContextProvider({ children }) {
  const { user } = useUserAuth();
  const [profilePic, setProfilePic] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const [classList, setClassList] = useState([]);
  const [userType, setUserType] = useState("");

  async function uploadProfilePic(photo) {
    const profRef = ref(storage, `propic/${user.uid}.jpg`);
    alert("changes may take a few minutes to apply");
    await uploadBytesResumable(profRef, photo);
    const _photoURL = await getDownloadURL(profRef);
    await updateProfile(user, { photoURL: _photoURL });
    console.log(_photoURL);
    setProfilePic(_photoURL);
    alert("successfully uploaded profile picutre");
  }

  return (
    <userGenContext.Provider
      value={{
        profilePic,
        setProfilePic,
        uploadProfilePic,
        setUserType,
        userType,
        classList,
        setClassList,
      }}
    >
      {children}
    </userGenContext.Provider>
  );
}

export function useUsrGen() {
  return useContext(userGenContext);
}
