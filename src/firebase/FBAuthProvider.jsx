import { useState, createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { FBCtx } from "./FBProvider";

export const FBAuthContext = createContext();

const FBAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const { auth, db } = useContext(FBCtx);

  const login = async (email, password) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const setUserData = async (user, userData) => {
    setError(null);
    try {
      const newDoc = await setDoc(doc(db, "users", user.uid), userData);
      return newDoc;
    } catch (err) {
      setError(err.message);
    }
  };

  const updateUserField = async (fieldName, value) => {
    setError(null);
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { [fieldName]: value });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          setProfile(docSnap.data());
        } catch (err) {
          setError(err.message);
        }
      };

      fetchUserProfile();
    }
  }, [user, db]);

  const theValues = {
    user,
    profile,
    error,
    setError,
    login,
    logout,
    setUserData,
    updateUserField,
  };

  return (
    <FBAuthContext.Provider value={theValues}>
      {children}
    </FBAuthContext.Provider>
  );
};

export default FBAuthProvider;
