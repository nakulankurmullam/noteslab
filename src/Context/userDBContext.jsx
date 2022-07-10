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
  const { setUserType } = useUsrGen();
  const { user } = useUserAuth();
  const { pathname } = useLocation();
  const userType = pathname.split("/")[1];
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
    try {
      await updateDoc(doc(db, "faculty", user.uid), {
        classes: arrayUnion(code),
      });
      await setDoc(doc(db, "class", title), {
        title,
        code,
        materials: [],
        students: [],
        works: [],
      });
      const out = await getDoc(doc(db, "class", title));
      return out.data().code
    } catch (err) {
      console.error(err);
    }
  }

  async function joinClass(code) {
    const q = query(collection(db, "class"), where("code", "==", code));
    const snapshot = await getDocs(q);
    const classTitle = snapshot.docs[0].data().title;
    updateDoc(doc(db, "student", user.uid), {
      classes: arrayUnion(code),
    });
    return updateDoc(doc(db, "class", classTitle), {
      students: arrayUnion(user.uid),
    });
  }

  async function getClassList() {
    const arr = [];
    try {
      const res = await getDoc(doc(db, userType, user.uid));
      setUserType(res.data().type);
      const { classes } = res.data();
      for (let code of classes) {
        const q = query(collection(db, "class"), where("code", "==", code));
        const resp = await getDocs(q);
        arr.push(resp.docs[0].data());
      }
      return arr;
    } catch (err) {
      console.error(err);
    }
  }

  async function getSubmitted(test) {
    try {
      const res = await getDoc(doc(db, "works", test));
      return res.data().submitted;
    } catch (err) {
      console.error(err);
    }
  }

  async function gradeStudents(gradeList, title) {
    try {
      await updateDoc(doc(db, "works", title), {
        submitted: [...gradeList],
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function getScore(title) {
    try {
      const res = await getDoc(doc(db, "works", title));
      const { submitted } = res.data();
      const currUser = submitted.filter((el) => el.uid === user.uid)[0];
      return currUser.mark;
    } catch (err) {
      console.error(err);
    }
  }

  async function uploadDetails(dept, sem, regNo) {
    await updateDoc(doc(db, "student", user.uid), {
      regNo,
      dept,
      sem,
    });
  }

  return (
    <userDetailsContext.Provider
      value={{
        uploadDetails,
        getScore,
        getSubmitted,
        gradeStudents,
        addFaculty,
        addStudent,
        joinClass,
        addClass,
        getClassList,
      }}
    >
      {children}
    </userDetailsContext.Provider>
  );
}

export const useUserDetail = () => {
  return useContext(userDetailsContext);
};
