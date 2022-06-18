import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDNkceFTsaR43IwPQ2FFmX6fw1SaiNqNnI",
  authDomain: "notes-lab-73d2e.firebaseapp.com",
  projectId: "notes-lab-73d2e",
  storageBucket: "notes-lab-73d2e.appspot.com",
  messagingSenderId: "296435744126",
  appId: "1:296435744126:web:c7d990d76006972adbc72f",
  measurementId: "G-1P7ES56VVL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)