import React, { createContext, useContext } from "react";
import {
  doc,
  setDoc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
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
      classes: [code],
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
    const q = query(collection(db,"class"), where("code", "==", code));
    const snapshot = await getDocs(q);
    console.log(snapshot.docs[0].data());
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
