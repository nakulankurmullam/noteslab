import React, { useContext, useState, createContext } from "react";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { useUserAuth } from "../Context/userAuthContext";
import { updateProfile } from "firebase/auth";

const userGenContext = createContext();

export function UserGenContextProvider({ children }) {
  const { user } = useUserAuth();
  const [usrType, setUserType] = useState(null);
  const [profileURL, setProfileURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  async function uploadProfilePic(photo) {
    const profRef = ref(storage, `propic/${user.uid}.jpg`);
    alert("changes may take a few minutes to apply");
    await uploadBytesResumable(profRef, photo);
    const _photoURL = await getDownloadURL(profRef);
    await updateProfile(user, {_photoURL});
    setProfileURL(_photoURL);
    alert("successfully uploaded profile picutre");
  }
  return (
    <userGenContext.Provider
      value={{
        profileURL,
        setProfileURL,
        uploadProfilePic,
        usrType,
        setUserType,
      }}
    >
      {children}
    </userGenContext.Provider>
  );
}

export function useUsrGen() {
  return useContext(userGenContext);
}
