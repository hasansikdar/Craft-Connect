import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.Config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

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
    const updateuserdata = (updateinfo) => {
        return updateProfile(auth.currentUser, updateinfo)
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

    const {data:users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await  fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })


  

    const authinfo = {user, refetch, updateuserdata, createaccount, logout, signin,loading, signinwithgoogle}



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