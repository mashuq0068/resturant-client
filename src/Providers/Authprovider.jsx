import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import usePublicAxios from "../Hooks/usePublicAxios";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const googleProvider  =new GoogleAuthProvider()
    const axiosPublic  = usePublicAxios()


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
             if(currentUser){
               
            const userInfo = {email : currentUser?.email}
                axiosPublic.post('/jwt' , userInfo)
                .then(res => {
                   
                    if(res.data.token){
                   
                   
                   
                  

                        localStorage.setItem('token' , res.data.token)
                    }
                } )

             }
             else{
                   localStorage.removeItem('token')
             }
            
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