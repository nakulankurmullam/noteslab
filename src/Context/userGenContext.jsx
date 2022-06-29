import React, { useContext, useState, createContext } from "react";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { setDoc, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { storage, db } from "../firebaseConfig";
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
    const profRef = ref(storage, `propic/${user.uid}`);
    alert("changes may take a few minutes to apply");
    await uploadBytesResumable(profRef, photo);
    const _photoURL = await getDownloadURL(profRef);
    await updateProfile(user, { photoURL: _photoURL });
    console.log(_photoURL);
    setProfilePic(_photoURL);
    alert("successfully uploaded profile picutre");
  }

  async function uploadMaterial(name, selClass, file) {
    const uploadRef = ref(storage, `uploads/${user.uid}/${name}`);
    await uploadBytesResumable(uploadRef, file);
    const downloadURL = await getDownloadURL(uploadRef);
    try {
      await updateDoc(doc(db, "class", selClass), {
        materials: arrayUnion({ title: name, downloadURL }),
      });
    } catch (err) {
      console.error(err);
    }
    alert("upload successfull");
  }

  async function postNewWork(name, selClass, type, date, file) {
    const postWorkRef = ref(storage, `works/${user.uid}/${name}`);
    await uploadBytesResumable(postWorkRef, file);
    const downloadURL = await getDownloadURL(postWorkRef);
    try {
      await updateDoc(doc(db, "class", selClass), {
        works: arrayUnion({
          title: name,
          downloadURL,
          type,
          date,
        }),
      });
      await setDoc(
        doc(db, "works", name),
        { type, downloadURL, due: date, submitted: [] },
        { merge: true }
      );
    } catch (err) {
      console.error(err);
    }
    alert("upload successfull");
  }

  async function submitWork(workName,file) {
    const submissionRef = ref(storage,`submissions/${user.uid}/${workName}`)
    let downloadURL = ''
    try{
      await uploadBytesResumable(submissionRef, file);
      downloadURL = await getDownloadURL(submissionRef);
      await updateDoc(doc(db, "works",workName),{
        submitted:arrayUnion({uid:user.uid,downloadURL})
      })
    }catch(err){console.error(err)}
  }

  return (
    <userGenContext.Provider
      value={{
        submitWork,
        profilePic,
        setProfilePic,
        uploadMaterial,
        postNewWork,
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
