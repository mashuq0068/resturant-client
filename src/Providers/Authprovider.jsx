import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const googleProvider  =new GoogleAuthProvider()


    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email , password)

    }
    const loginUser = (email , Password) => {
        
        
     
        setLoading(true)
      return  signInWithEmailAndPassword(auth , email ,Password)
    
        
    }
    const logOutUser = () => {
        setLoading(true)
        
        return signOut(auth)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth , googleProvider)
    }
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (currentUser) => {
             console.log(currentUser)
             setUser(currentUser)
             setLoading(false)
            
       })
       return (()=>{
        unSubscribe()
    })
    },[])

    const value = {
        createUser,
        loginUser,
        logOutUser,
        user,
        loading,
        signInWithGoogle
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;