import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.Config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useQuery } from "@tanstack/react-query";

export const Authcontext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createaccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    console.log(name, photo);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signinwithgoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/users"
      );
      const data = await res.json();
      return data;
    },
  });
  const urls = `http://localhost:5000/user/${user?.email}`;
  const { data: myPro = [], refetch:myProUpdate } = useQuery({
    queryKey: ["myPro", user?.email],
    queryFn: async () => {
      const res = await fetch(urls);
      const data = res.json();
      return data;
    },
  });
  const authinfo = {
    user,
    users,
    refetch,
    updateUserProfile,
    createaccount,
    logout,
    signin,
    loading,
    signinwithgoogle,
    myPro,
    myProUpdate
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
