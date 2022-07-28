import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFQLxf9G_6UrjxbaItdt8e-czyariXmlQ",

  authDomain: "noteslab-db91f.firebaseapp.com",

  projectId: "noteslab-db91f",

  storageBucket: "noteslab-db91f.appspot.com",
  messagingSenderId: "913983772142",
  appId: "1:913983772142:web:d802c4cdba3dde44c86aff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
