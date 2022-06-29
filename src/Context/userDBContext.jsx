import React, { createContext, useState, useContext, useEffect } from "react";
import {
  doc,
  setDoc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { useUserAuth } from "./userAuthContext";
import { useUsrGen } from "./userGenContext";
import { db } from "../firebaseConfig";
import { useLocation } from "react-router-dom";

const userDetailsContext = createContext();

export function UserDetailsContextProvider({ children }) {
  const { user } = useUserAuth();
  const { setClassList } = useUsrGen();
  const { pathname } = useLocation();
  const userType = pathname.split("/")[1];
  console.log(userType);
  function addFaculty(name, facId) {
    return setDoc(doc(db, "faculty", facId), {
      name,
      type: "faculty",
      classes: [],
    });
  }

  function addStudent(name, regNo, stdId, dept, sem) {
    return setDoc(doc(db, "student", stdId), {
      name,
      regNo,
      dept,
      type: "student",
      classes: [],
      sem,
    });
  }

  async function addClass(code, title) {
    await updateDoc(doc(db, "faculty", user.uid), {
      classes: arrayUnion(code),
    });
    return setDoc(doc(db, "class", title), {
      title,
      code,
    });
  }

  async function joinClass(code) {
    const q = query(collection(db, "class"), where("code", "==", code));
    const snapshot = await getDocs(q);
    const classTitle = snapshot.docs[0].data().title;
    updateDoc(doc(db, "student", user.uid), {
      classes: arrayUnion(code),
    });
    return setDoc(doc(db, "class", classTitle), {
      students: arrayUnion(user.uid),
    });
  }

  async function getClassList() {
    const arr = [];
    try {
      const data = (await getDoc(doc(db, userType, user.uid))).data();
      console.log(data);
      const { classes } = data;
      console.log(classes);
      for (let code of classes) {
        const q = query(collection(db, "class"), where("code", "==", code));
        const resp = await getDocs(q);
        console.log(resp.docs[0].data()); // {title:'Title of class',code:'2312asdf'}
        arr.push(resp.docs[0].data());
      }
      console.log(arr);
      return arr;
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <userDetailsContext.Provider
      value={{ addFaculty, addStudent, joinClass, addClass, getClassList }}
    >
      {children}
    </userDetailsContext.Provider>
  );
}

export const useUserDetail = () => {
  return useContext(userDetailsContext);
};
