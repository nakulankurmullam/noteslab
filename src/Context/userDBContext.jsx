import React, { createContext, useContext } from "react";
import {
  doc,
  setDoc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
import { useUserAuth } from "./userAuthContext";
import { db } from "../firebaseConfig";

const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {
  const { user } = useUserAuth();
  function addFaculty(name, facId) {
    return setDoc(doc(db, "faculty", facId), {
      name,
      type: "faculty",
    });
  }

  function addStudent(name, regNo, stdId, dept, sem) {
    return setDoc(doc(db, "student", stdId), {
      name,
      regNo,
      dept,
      type: "student",
      sem,
    });
  }

  async function addClass(code, title) {
    await updateDoc(doc(db, "faculty", user.uid), {
      classes: arrayUnion(code),
    });
    // await setDoc(doc(db, "faculty", user.uid), {
    //   classes: { title: code },
    // });
    return setDoc(doc(db, "class", title), {
      title,
      code,
    });
  }
  
  async function joinClass(code) {
    const q = query(collection(db, "class"), where("code", "==", code));
    const snapshot = await getDocs(q);
    const classTitle = snapshot.docs[0].data().title;
    console.log(classTitle);
    updateDoc(doc(db, "student", user.uid), {
      classes: arrayUnion(code),
    });
    return updateDoc(doc(db, "class", classTitle), {
      students: arrayUnion(user.uid),
    });
  }

  return (
    <userDetailsContext.Provider
      value={{ addFaculty, addStudent, joinClass, addClass }}
    >
      {children}
    </userDetailsContext.Provider>
  );
}

export const useUserDetail = () => {
  return useContext(userDetailsContext);
};
