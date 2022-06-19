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
import { db } from "../firebaseConfig";

const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {
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

  return (
    <userDetailsContext.Provider value={{ addFaculty, addStudent }}>
      {children}
    </userDetailsContext.Provider>
  );
}

export const useUserDetail = () => {
  return useContext(userDetailsContext);
};
