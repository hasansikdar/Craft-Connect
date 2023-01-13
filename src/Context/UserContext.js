import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const Authcontext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createaccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }
    const signinwithgoogle = ()  => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    const authinfo = {user, createaccount, logout, signin,loading, signinwithgoogle}



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return() => {
            unsubscribe();
        }
    },[])

    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;