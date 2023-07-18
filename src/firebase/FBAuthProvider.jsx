import { useState, createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
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

      const expirationDate = new Date(
        new Date().getTime() + 24 * 60 * 60 * 1000
      );
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      localStorage.setItem("expirationDate", expirationDate.toISOString());
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("expirationDate");
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

  const deleteProfile = async () => {
    setError(null);
    try {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        await signOut(auth);
        await deleteUser(userRef);

        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("expirationDate");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (storedUser && expirationDate && expirationDate > new Date()) {
      setUser(storedUser);
    }
  }, []);

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
    deleteProfile,
  };

  return (
    <FBAuthContext.Provider value={theValues}>
      {children}
    </FBAuthContext.Provider>
  );
};

export default FBAuthProvider;
