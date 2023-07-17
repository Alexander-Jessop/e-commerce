import { useState, createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
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

  const toggleWishlist = async (itemId) => {
    setError(null);
    try {
      const userRef = doc(db, "users", user.uid);

      const docSnap = await getDoc(userRef);
      const userData = docSnap.data();
      const isInWishlist = userData?.wishlist?.includes(itemId);

      if (isInWishlist) {
        await updateDoc(userRef, { wishlist: arrayRemove(itemId) });
      } else {
        await updateDoc(userRef, { wishlist: arrayUnion(itemId) });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          const docRef = doc(db, "users", user.uid);

          const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
              setProfile(docSnap.data());
            } else {
              setProfile(null);
            }
          });

          return () => unsubscribe();
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
    toggleWishlist,
  };

  return (
    <FBAuthContext.Provider value={theValues}>
      {children}
    </FBAuthContext.Provider>
  );
};

export default FBAuthProvider;
