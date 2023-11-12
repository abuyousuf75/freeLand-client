import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [looding, setLooding] = useState(true);

    // crete user accout via register form
    const createUser = (email,password) =>{
        setLooding(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // login user
    const loginUser = (email,password) =>{
        setLooding(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

//logoutUser
    const logOut = () =>{
        setLooding(true);
        return signOut(auth);
     }

     // login user via google
 const googleProvider = new GoogleAuthProvider();

 const googleLogin = () =>{
    setLooding(true)
     return signInWithPopup(auth, googleProvider)
 }

    // oversver user

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLooding(false);
            // if user exsist issue token 
            const userEmail = currentUser?.email  || user.email;
            const loggedUser = {email : userEmail}
            if(currentUser){
                
                axios.post('https://freeland-backend.vercel.app/jwt',loggedUser,{withCredentials: true})
                .then(res => {
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('https://freeland-backend.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () =>{
          return  unsubscribe()
        }
    },[user?.email])


    const AuthInfo = {
        createUser,user,looding,loginUser,logOut,googleLogin
    }

    
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;