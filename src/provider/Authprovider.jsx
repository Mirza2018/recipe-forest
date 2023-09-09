import { createContext, useEffect, useState } from "react";

import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../config/firebase.config";
export const AuthContext = createContext(null)


const Authprovider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const gProvider = new GoogleAuthProvider();
    const ghProvider = new GithubAuthProvider();
    const fProvider = new FacebookAuthProvider();

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(false)

        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginByGoogle = () => {
        setLoading(false)

        return signInWithPopup(auth, gProvider);
    }
    const loginByGithub = () => {
        setLoading(false)
        return signInWithPopup(auth, ghProvider);
    }
    const loginByFacebook = () => {
        setLoading(false)

        return signInWithPopup(auth, fProvider);
    }
    const logOut = () => {
        setLoading(false)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const profileUpdate = (name, url) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: url })
    }
    const fogotEmail=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }


    const value = {
        user,
        loading,
        createUser,
        loginUser,
        loginByGoogle,
        logOut,
        loginByGithub,
        loginByFacebook,
        profileUpdate,
        fogotEmail

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;