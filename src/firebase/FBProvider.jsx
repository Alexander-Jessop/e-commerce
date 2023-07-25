import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBrnrNpVffegyezB66YhBytcYIuNCFZ7j8",
  authDomain: "fashion-e-commerce-2c18d.firebaseapp.com",
  projectId: "fashion-e-commerce-2c18d",
  storageBucket: "fashion-e-commerce-2c18d.appspot.com",
  messagingSenderId: "527821318306",
  appId: "1:527821318306:web:1a2ce4eb6f7335b21f4ffb",
  measurementId: "G-YJVTVS68LG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export const FBCtx = createContext();

const FBProvider = ({ children }) => {
  const fBContent = { app, auth, db, storage, functions };

  return <FBCtx.Provider value={fBContent}>{children}</FBCtx.Provider>;
};

export default FBProvider;
