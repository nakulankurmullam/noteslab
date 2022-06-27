import React, { createContext, useContext } from "react";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {useUserAuth} from "./userAuthContext"
import { db } from "../firebaseConfig";

const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {
  const {user} = useUserAuth()
  function addFaculty(name, facId) {
    return setDoc(doc(db, "faculty", facId), {
      name,
      type:"faculty",
    });
  }

  function addStudent(name, regNo, dept, sem) {
    return setDoc(doc(db, "student", regNo), {
      name,
      regNo,
      dept,
      type:"student",
      sem,
    });
  }

  async function addClass(code,title){
    await setDoc(doc(db, "faculty", user.uid), {
      "classes":{title:code},
    })
    return setDoc(doc(db,"class",title),{
      title,
      code,
    })
  }

  return (
    <userDetailsContext.Provider value={{ addFaculty, addStudent, addClass }}>
      {children}
    </userDetailsContext.Provider>
  );
}

export const useUserDetail = () => {
  return useContext(userDetailsContext);
};
