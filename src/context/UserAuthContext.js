import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { user } from 'redux/userSlice'
import userAvatar from 'image/user.png'


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState("");

    function signUp(email, password) {
        return createUserWithEmailAndPassword( auth, email, password)
    }
    
    function logIn(email, password) {
        return signInWithEmailAndPassword( auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserLogin(currentUser)
            const userInfo = {
                email: currentUser.email,
                name: currentUser.displayName ? currentUser.displayName : 'User',
                avatar: currentUser.photoURL ? currentUser.photoURL : userAvatar,
            }
            dispatch(user(userInfo))
        }) 
        return () => {
            unsubscribe();
        }
    }, [])

    return <userAuthContext.Provider value={{userLogin, signUp, logIn, logOut, googleSignIn}}>
        {children}
    </userAuthContext.Provider>
}
 
export function useUserAuth() {
    return useContext(userAuthContext)
}